import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MeasuresShowController extends Controller {
  @action
  save() {
    this.model.save();
    this.transitionToRoute('calendar');
  }

  @action
  delete() {
    const event = this.model.event;
    this.model.destroyRecord()
    event.set('measure', null);
    event.set('measureId', null);
    this.transitionToRoute('calendar');
  }

  @action
  transitionBack() {
    this.transitionToRoute('calendar')
  }
}
