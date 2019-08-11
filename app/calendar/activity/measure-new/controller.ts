import Controller from '@ember/controller';
import { action } from '@ember/object';
import Event from 'fitness/models/event';

export default class MeasuresNewController extends Controller {
  @action
  save() {
    const urlParts: string[] = window.location.href.split('/');
    const eventId = urlParts[urlParts.indexOf('calendar') + 1];
    
    let event: Event = this.store.peekRecord('event', eventId);
    event.set('day', new Date());
    event.set('completed', true);
    event.set('measureId', this.model.id);
    event.set('measure', this.model);

    this.model.save();
    event.save();

    this.transitionToRoute('calendar');
  }

  @action
  async transitionBack() {
    await this.model.destroyRecord();
    this.transitionToRoute('calendar');
  }
}
