import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import { months } from 'efitness/utils/calendar-helper';
import Event from 'efitness/models/event';
import Measure from 'efitness/models/measure';
import { increaseMonth, decreaseMonth, isSameDay } from 'efitness/utils/calendar-helper';
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
  selectedDate!:Date;
  @tracked date?: Date;
  @tracked showBottomSheet?: Boolean;

  init() {
    super.init();
    this.date = new Date();
    this.selectedDate = new Date();
    this.showBottomSheet = false;
  }

  get month() {
    if (this.date) {
      return `${months[this.date.getMonth()]} ${this.date.getFullYear()}`;
    }

    return null;
  }

  @action incMonth() {
    if (this.date) {
      this.date = increaseMonth(this.date);
    }
  }

  @action decMonth() {
    if (this.date) {
      this.date = decreaseMonth(this.date);
    }
  }

  @action createMeasure(url: string, label: string, measureId?: string): Activity {
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

  @action toggleBottomSheet() {
    this.showBottomSheet = !this.showBottomSheet;
  }

  @action selectDay(date: Date) {
    set(this, 'selectedDate', date);
    this.toggleBottomSheet();
  }

  @action async saveMeasure(weight: number, fat: number, water: number, muscle: number, boneDensity: number) {
    let event = this.model.find((record: Event) => isSameDay(record.day, this.selectedDate))

    if (!event) {
      event = await this.store.createRecord('event', {
        day: new Date(this.selectedDate.getTime())
      })
    }

    let measure;
    if (event.measureId) {
      measure = this.store.peekRecord('measure', event.measureId);
    } else {
      measure = this.store.createRecord('measure');
    }

    measure.weight = weight;
    measure.fat = fat;
    measure.water = water;
    measure.muscle = muscle;
    measure.boneDensity = boneDensity;
    measure.eventId = event.id;
    measure.event = event;
    measure.save();

    event.measure = measure;
    event.measureId = measure.id;
    event.save();
  }

  @action async saveTraining(training?: Training) {
    let selectedEvent = this.model.find((event: Event) => isSameDay(event.day, this.selectedDate))

    if (!selectedEvent) {
      selectedEvent = await this.store.createRecord('event', {
        day: this.selectedDate
      })
    }

    if (training) {
      selectedEvent.training = training;
      selectedEvent.trainingId = training.id;
      training.eventId = selectedEvent.id;
      training.event = selectedEvent;
      training.save();
    }

    selectedEvent.save();
  }
}