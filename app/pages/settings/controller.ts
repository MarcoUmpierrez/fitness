import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import SettingsService from 'efitness/services/settings';
import { userId } from 'efitness/utils/constants';
import { task, timeout } from 'ember-concurrency';
import Task from 'ember-concurrency/task';
import { tracked } from '@glimmer/tracking';
import { AsyncFileReader } from './-private';

interface BackUp {
  events: object[],
  exercises: object[],
  measures: object[],
  routines: object[],
  trainings: object[],
  settings: (UserSettings|null)[]
}

export default class SettingsController extends Controller {
  @service settings!: SettingsService;

  @tracked user!: UserSettings;

  @(task(function*(this: SettingsController) {
    this.user = yield this.settings.load(userId);
    if (!this.user) {
      this.user = { id: userId, height: 0 };
    }
  })).drop() loadSettings!: Task;

  @(task(function*(this: SettingsController, { target: { value } }:  { target: { value: string }}) {
    yield timeout(500);
    const height = parseFloat(value);
    if (!isNaN(height)) {
      this.settings.save({ id: userId, height: height});
    }
  }).restartable()) saveSettings!: Task;

  @action async upload() {
    const input = new AsyncFileReader();
    const result = await input.click();
    const models: BackUp = JSON.parse(result);
    this.uploadBackUp(models);
    input.dispose();
  }

  private async uploadBackUp(models: BackUp) {
    console.log(models);
    if (models) {
      models.events.forEach(event => event.attributes.day = new Date(event.attributes.day));
      this.store.push({data: models.events });
      this.store.push({data: models.exercises });
      this.store.push({data: models.measures });
      this.store.push({data: models.routines });
      this.store.push({data: models.trainings });
      models.settings.forEach(setting => {
        if (setting) {
          this.settings.save(setting);
        }
      });
    }
  }

  @action async download() {
    const today = new Date();
    const backup = await this.createBackUp();

    // Create a link to download the generated backup file
    const element: HTMLElement = document.createElement('a');
    const link: HTMLLinkElement = element as HTMLLinkElement;
    const blob = new Blob([JSON.stringify(backup)], {type: 'text/plain'});
    link.setAttribute('target','_blank');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download',`backup-${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}-${today.getHours()}.${today.getMinutes()}`);
    link.click();
    link.remove();
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