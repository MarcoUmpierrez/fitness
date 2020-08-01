import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import SettingsService from 'efitness/services/settings';
import { userId } from 'efitness/utils/constants';
import { task, timeout } from 'ember-concurrency';
import Task from 'ember-concurrency/task';
import { tracked } from '@glimmer/tracking';
import { AsyncFileReader, downloadFile } from './-private';
import BatchOperationsService from 'efitness/services/batch-operations';

export default class SettingsController extends Controller {
  @service settings!: SettingsService;
  @service batchOperations!: BatchOperationsService;
  @tracked invalidHeight: boolean = false;
  heightPattern = /[0|1]{1}[,|.]\d{1,2}/;

  @tracked user!: UserSettings;

  @(task(function* (this: SettingsController) {
    this.user = yield this.settings.load(userId);
    if (!this.user) {
      this.user = { id: userId, height: null };
    }
  })).drop() loadSettings!: Task;

  @(task(function* (this: SettingsController, { target: { value } }: { target: { value: string } }) {
    yield timeout(500);
    this.invalidHeight = false;
    const sanitizedValue = value.replace(',', '.')
    if (sanitizedValue.match(this.heightPattern) && sanitizedValue.length <= 4) {
      const height = parseFloat(sanitizedValue);
      if (!isNaN(height)) {
        this.settings.save({ id: userId, height: height });
      }
    } else {      
      this.invalidHeight = true;
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
    const today = new Date();
    let fileName = prompt("Backup file name", `backup-${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}-${today.getHours()}.${today.getMinutes()}`);
    if (fileName !== null && fileName !== "" && !/[<>:"/\|?*]/g.test(fileName)) {
      const backup = await this.createBackUp();
      downloadFile(backup, fileName);
    }
  }

  private async uploadBackUp(models: BackUp) {
    // clear store
    this.store.unloadAll();

    if (models) {
      // convert string dates into Date types
      models.events.forEach((event: { day: string | Date }) => event.day = new Date(event.day));
      models.routines.forEach((routine: { createdOn: string | Date }) => routine.createdOn = new Date(routine.createdOn));


      this.store.push({ data: models.events });
      this.store.push({ data: models.exercises });
      this.store.push({ data: models.measures });
      this.store.push({ data: models.routines });
      this.store.push({ data: models.trainings });

      await this.batchOperations.saveAll(models);

      models.settings.forEach(setting => {
        if (setting) {
          this.settings.save(setting);
        }
      });
    }
  }

  private async createBackUp(): Promise<BackUp> {
    let data: BackUp = { events: [], exercises: [], measures: [], routines: [], trainings: [], settings: [] };
    (await this.store.findAll('event')).forEach(model => data.events.push(this.pullPayload(model)));
    (await this.store.findAll('exercise')).forEach(model => data.exercises.push(this.pullPayload(model)));
    (await this.store.findAll('measure')).forEach(model => data.measures.push(this.pullPayload(model)));
    (await this.store.findAll('routine')).forEach(model => data.routines.push(this.pullPayload(model)));
    (await this.store.findAll('training')).forEach(model => data.trainings.push(this.pullPayload(model)));
    data.settings.push(await this.settings.load(userId));
    return data;
  }

  private pullPayload(model: any): BackUpModel {
    return model.serialize({ includeId: true });
  }
}