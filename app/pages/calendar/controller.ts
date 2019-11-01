import Controller from '@ember/controller';
import { computed, action, set } from '@ember/object';
import { months } from 'efitness/utils/calendar-helper';
import Event from 'efitness/models/event';
import Measure from 'efitness/models/measure';
import Training from 'efitness/models/training';
import { increaseMonth, decreaseMonth } from 'efitness/utils/calendar-helper';

interface Activity {
  url: string,
  measureOrRoutineId?: string,
  icon: string,
  iconTitle: string,
  label: string
}

export default class CalendarController extends Controller {
  date?: Date;
  selectedDate?:Date;
  showBottomSheet?: Boolean;
  event?: Event;

  init() {
    super.init();
    this.date = new Date();
    this.showBottomSheet = false;
  }

  @computed('date')
  get month() {
    if (this.date) {
      return `${months[this.date.getMonth()]} ${this.date.getFullYear()}`;
    }

    return null;
  }

  @action 
  incMonth() {
    if (this.date) {
      set(this, 'date', increaseMonth(this.date));
    }
  }

  @action 
  decMonth() {
    if (this.date) {
      set(this, 'date', decreaseMonth(this.date));
    }
  }

  @action 
  createMeasure(url: string, label: string, measureId?: string): Activity {
    return {
      url: `calendar.${url}`,
      measureOrRoutineId: measureId,
      icon: 'weight',
      iconTitle: 'weight',
      label: `${label} measures`
    };
  }

  createRoutine(url: string, label: string, routineId?: string): Activity {
    return {
      url: `calendar.${url}`,
      measureOrRoutineId: routineId,
      icon: 'running',
      iconTitle: 'running',
      label: `${label} training`
    };
  }  

  @action
  toggleBottomSheet() {
    set(this, 'showBottomSheet', !this.showBottomSheet);
  }

  @action
  selectDay(eventId: string, date: Date): void {
    let event;
    if (eventId) {
      event = this.store.peekRecord('event', eventId);
    } else {
      event = this.store.createRecord('event', {
        day: date
      })
    }

    set(this, 'event', event);
    this.toggleBottomSheet();
  }

  @action
  saveEvent(event: Event, measure?: Measure, training?: Training) {
    console.log('saving');

    if (measure) {
      set(event, 'measure', measure);
      event.measureId = measure.id;
      set(measure, 'event', event);
      measure.save();
      event.save();
    }
  }
}