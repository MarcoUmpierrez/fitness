import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import SettingsService from 'efitness/services/settings';
import { userId } from 'efitness/utils/constants';
import { task, timeout } from 'ember-concurrency';
import Task from 'ember-concurrency/task';
import { tracked } from '@glimmer/tracking';
import { AsyncFileReader, downloadFile, BackUp } from './-private';

export default class SettingsController extends Controller {
  @service settings!: SettingsService;

  @tracked user!: UserSettings;

  @(task(function* (this: SettingsController) {
    this.user = yield this.settings.load(userId);
    if (!this.user) {
      this.user = { id: userId, height: null };
    }
  })).drop() loadSettings!: Task;

  @(task(function* (this: SettingsController, { target: { value } }: { target: { value: string } }) {
    yield timeout(500);
    const height = parseFloat(value);
    if (!isNaN(height)) {
      this.settings.save({ id: userId, height: height });
    }
  }).restartable()) saveSettings!: Task;

  @action async upload() {
    const input = new AsyncFileReader();
    const result = await input.click();
    const models: BackUp = JSON.parse(result);
    this.uploadBackUp(models);
    input.dispose();
    this.loadSettings.perform();
  }

  @action async download() {
    const backup = await this.createBackUp();
    downloadFile(backup);
  }

  private async uploadBackUp(models: BackUp) {
    // clear store
    this.store.unloadAll();

    if (models) {
      // convert string dates into Date types
      models.events.forEach((event: { attributes: { day: string | Date } }) => event.attributes.day = new Date(event.attributes.day));
      models.routines.forEach((routine: { attributes: { createdOn: string | Date } }) => routine.attributes.createdOn = new Date(routine.attributes.createdOn));

      this.store.push({ data: models.events });
      this.store.push({ data: models.exercises });
      this.store.push({ data: models.measures });
      this.store.push({ data: models.routines });
      this.store.push({ data: models.trainings });

      models.settings.forEach(setting => {
        if (setting) {
          this.settings.save(setting);
        }
      });
    }
  }

  private async createBackUp(): Promise<BackUp> {
    let data: BackUp = { events: [], exercises: [], measures: [], routines: [], trainings: [], settings: [] };
    (await this.store.findAll('event')).forEach(model => data.events.push(this.pullPayload(model, 'event')));
    (await this.store.findAll('exercise')).forEach(model => data.exercises.push(this.pullPayload(model, 'exercise')));
    (await this.store.findAll('measure')).forEach(model => data.measures.push(this.pullPayload(model, 'measure')));
    (await this.store.findAll('routine')).forEach(model => data.routines.push(this.pullPayload(model, 'routine')));
    (await this.store.findAll('training')).forEach(model => data.trainings.push(this.pullPayload(model, 'training')));
    data.settings.push(await this.settings.load(userId));
    return data;
  }

  private pullPayload(model: any, type: string): object {
    return {
      id: model.id,
      type: type,
      attributes: model.serialize()
    };
  }
}