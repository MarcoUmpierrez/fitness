import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import SettingsService from 'efitness/services/settings';
import { userId } from 'efitness/utils/constants';
import { task, timeout } from 'ember-concurrency';
import Task from 'ember-concurrency/task';
import { tracked } from '@glimmer/tracking';

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

  @action download() {
     // Set up the link
     const element: HTMLElement = document.createElement('a');
     const link: HTMLLinkElement = element as HTMLLinkElement;
     link.style.display = 'none';
     link.setAttribute("target","_blank");
     var blob = new Blob(["hello moto"], {type: "text/plain"});
     link.setAttribute("href", URL.createObjectURL(blob));

     link.setAttribute("download","file.txt");
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link)
  }
}