import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import Event from 'efitness/models/event';
import Measure from 'efitness/models/measure';
import Training from 'efitness/models/training';
import Routine from 'efitness/models/routine';
import { months } from 'efitness/utils/constants';
import { TrainingBox, MeasuresBox } from 'efitness/utils/wrappers';
import { dateHelper, comparator } from 'efitness/utils/calendar-helper';

export default class CalendarController extends Controller {
  @tracked model!: {events: Event[], measures: Measure[], trainings: Training[], routines: Routine[] };
  event?: Event;
  selectedDate!:Date;
  @tracked date?: Date;
  @tracked showBottomSheet?: Boolean;

  constructor() {
    super(...arguments);
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
      this.date = dateHelper.increaseMonth(this.date);
    }
  }

  @action decMonth() {
    if (this.date) {
      this.date = dateHelper.decreaseMonth(this.date);
    }
  }

  @action toggleBottomSheet() {
    this.showBottomSheet = !this.showBottomSheet;
  }

  @action selectDay(date: Date) {
    set(this, 'selectedDate', date);
    this.toggleBottomSheet();
  }

  getRecord<T>(type: string, id?: string): T  {
    if (id) {
      return this.store.peekRecord(type, id);
    } else {
      return this.store.createRecord(type);
    }
  }

  getEvent(): Event {
    let event = this.model.events.find((record: Event) => comparator.eq(record.day, this.selectedDate))

    if (!event) {
      event = this.store.createRecord('event', {
        day: new Date(this.selectedDate.getTime())
      }) as Event;
    }

    return event;
  }

  @action async saveMeasure(measuresBox: MeasuresBox) {
    let event = this.getEvent();
    let measure : Measure = this.getRecord<Measure>('measure', event.measureId);
    measure.weight = measuresBox.weight || 0;
    measure.fat = measuresBox.fat || 0;
    measure.water = measuresBox.water || 0;
    measure.muscle = measuresBox.muscle || 0;
    measure.boneDensity = measuresBox.boneDensity || 0;
    measure.eventId = event.id;
    measure.event = event;
    measure.save();

    event.measure = measure;
    event.measureId = measure.id;
    event.save();
    this.toggleBottomSheet();
  }

  @action async saveTraining(trainingBox: TrainingBox) {
    let event = this.getEvent();
    let training : Training = this.getRecord<Training>('training', event.trainingId);
    training.isRepeatable = trainingBox.isRepeatable;
    training.repeatOnDays = trainingBox.repeatOnDays;
    training.repeatOnWeeks = trainingBox.repeatOnWeeks;
    training.lastUntil = trainingBox.lastUntil;
    training.eventId = event.id;
    training.event = event;
    training.save();

    event.training = training;
    event.trainingId = training.id;
    event.save();
    this.toggleBottomSheet();
  }
}