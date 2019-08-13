import Controller from '@ember/controller';
import { action } from '@ember/object';
import Event from 'fitness/models/event';
import { isSameDay } from 'fitness/utils/calendar-helper';
import Measure from 'fitness/models/measure';

export default class MeasuresNewController extends Controller {
  @action
  save() { 
    let measure : Measure = this.model;
    if (!measure.muscle && !measure.water && !measure.weight && !measure.boneDensity && !measure.fat) {
      return;
    }
    
    const events = this.store.peekAll('event');
    let event: Event = events.find((event: Event) => isSameDay(event.day, new Date()));
    if (!event) {
      event = this.store.createRecord('event');
    }
     
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
