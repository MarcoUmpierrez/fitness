import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import { months } from 'efitness/utils/calendar-helper';
import Event from 'efitness/models/event';
import Measure from 'efitness/models/measure';
import { increaseMonth, decreaseMonth } from 'efitness/utils/calendar-helper';
import Training from 'efitness/models/training';

interface Activity {
  url: string,
  measureOrRoutineId?: string,
  icon: string,
  iconTitle: string,
  label: string
}

export default class CalendarController extends Controller {
  event?: Event;
  selectedDate?:Date;
  @tracked date?: Date;
  @tracked showBottomSheet?: Boolean;

  init() {
    super.init();
    this.date = new Date();
    this.showBottomSheet = false;
  }

  get month() {
    if (this.date) {
      return `${months[this.date.getMonth()]} ${this.date.getFullYear()}`;
    }

    return null;
  }

  @action
  incMonth() {
    if (this.date) {
      this.date = increaseMonth(this.date);
    }
  }

  @action
  decMonth() {
    if (this.date) {
      this.date = decreaseMonth(this.date);
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
    this.showBottomSheet = !this.showBottomSheet;
  }

  @action
  async selectDay(eventId: string, date: Date): Promise<void> {
    let event;
    if (eventId) {
      event = await this.store.findRecord('event', eventId);
    } else {
      event = await this.store.createRecord('event', {
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
      measure.eventId = event.id;
      set(measure, 'event', event);
      measure.save();
    }

    if (training) {
      set(event, 'training', training);
      event.trainingId = training.id;
      training.eventId = event.id;
      set(training, 'event', event);
      training.save();
    }


    event.save();
  }
}