import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';
import Measure from 'efitness/models/measure';
import Training from 'efitness/models/training';
import Event from 'efitness/models/event';
import { comparator } from 'efitness/utils/calendar-helper';

interface Args {
  date: Date,
  events: Event[],
  onSaveMeasure: (measure?: Measure) => void,
  onSaveTraining: (training?: Training) => void,
  onClose: () => void
}

export default class BottomSheetComponent extends Component<Args> {
  @service store! : Store;
  @tracked state! : number;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
    this.state = 0;
  }

  get isMenuState() {
    return this.state === 0;
  }

  get isMeasureState() {
    return this.state === 1;
  }

  get isTrainingState() {
    return this.state === 2;
  }

  get measure(): Measure | null {
    const { events, date } = this.args;
    let event: Event | undefined = events.find((event: Event) => comparator.eq(event.day, date));
    if (event && event.measureId) {
      return this.store.peekRecord('measure', event.measureId)
    }

    return null;
  }

  get training(): Training | null {
    const { events, date } = this.args;
    let event: Event | undefined = events.find((event: Event) => comparator.eq(event.day, date));
    if (event && event.trainingId) {
      return this.store.peekRecord('training', event.trainingId)
    }

    return null;
  }

  @action setMeasuresState() {
    this.state = 1;
  }

  @action setTrainingState() {
    this.state = 2;
  }
}