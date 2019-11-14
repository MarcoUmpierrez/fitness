import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import SettingsService from 'efitness/services/settings';
import { userId } from 'efitness/utils/constants';
import { task, timeout } from 'ember-concurrency';
import Task from 'ember-concurrency/task';
import { tracked } from '@glimmer/tracking';

interface BackUp {
  events: object[],
  exercise: object[],
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

  @action async download() {
    const today = new Date();
    const backup = await this.CreateBackUp();

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

  async CreateBackUp(): Promise<BackUp> {
    let data: BackUp = { events: [], exercise: [], measures: [], routines: [], trainings: [], settings: [] };
    (await this.store.findAll('event')).forEach(model => data.events.push(model.serialize()));
    (await this.store.findAll('exercise')).forEach(model => data.exercise.push(model.serialize()));
    (await this.store.findAll('measure')).forEach(model => data.measures.push(model.serialize()));
    (await this.store.findAll('routine')).forEach(model => data.routines.push(model.serialize()));
    (await this.store.findAll('training')).forEach(model => data.trainings.push(model.serialize()));
    data.settings.push(await this.settings.load(userId));
    return data;
  }
}