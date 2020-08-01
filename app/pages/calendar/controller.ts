import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Event from 'efitness/models/event';
import Measure from 'efitness/models/measure';
import Training from 'efitness/models/training';
import Routine from 'efitness/models/routine';
import { TrainingBox, MeasuresBox } from 'efitness/utils/wrappers';
import { comparator } from 'efitness/utils/calendar-helper';
import CalendarState from './-private/state';
import Calendar from './-private/calendar';

export default class CalendarController extends Controller {
  @tracked model!: {events: Event[], measures: Measure[], trainings: Training[], routines: Routine[] };
  event?: Event;
  @tracked showBottomSheet?: Boolean;
  state: CalendarState;
  calendar: Calendar;

  constructor() {
    super(...arguments);
    this.showBottomSheet = false;
    this.state = new CalendarState();
    this.calendar = new Calendar();
  }

  get measure(): Measure | null {
    let event: Event = this.getEvent();
    if (event && event.measureId) {
      return this.store.peekRecord('measure', event.measureId)
    }

    return null;
  }

  get training(): Training | null {
    let event: Event = this.getEvent();
    if (event && event.trainingId) {
      return this.store.peekRecord('training', event.trainingId)
    }

    return null;
  }

  @action selectDay(date: Date) {
    this.calendar.selectedDate = date;
    this.toggleBottomSheet();
  }  

  @action toggleBottomSheet() {
    this.showBottomSheet = !this.showBottomSheet;

    if (!this.showBottomSheet) {
      this.state.reset();
    }
  }

  getRecord<T>(type: string, id?: string): T  {
    if (id) {
      return this.store.peekRecord(type, id);
    } else {
      return this.store.createRecord(type);
    }
  }

  getEvent(): Event {
    let event = this.model.events.find((record: Event) => comparator.eq(record.day, this.calendar.selectedDate))

    if (!event) {
      event = this.store.createRecord('event', {
        day: new Date(this.calendar.selectedDate.getTime())
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