import Controller from '@ember/controller';
import { action } from '@ember/object';
import Event from 'fitness/models/event';

export default class MeasuresNewController extends Controller {
  @action
  save() {    
    let event: Event = this.store.createRecord('event');
    event.set('day', new Date());
    event.set('completed', true);
    event.set('measureId', this.model.id);
    event.set('measure', this.model);
    event.save();

    this.model.set('eventId', event.id);
    this.model.set('event', event);
    this.model.save();

    this.transitionToRoute('calendar');
  }

  @action
  transitionBack() {
    this.transitionToRoute('calendar');
  }
}
