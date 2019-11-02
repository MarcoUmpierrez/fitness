import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import StoreService from 'ember-data/store';
import Event from 'efitness/models/event';
import Measure from 'efitness/models/measure';
import Training from 'efitness/models/training';

export default class BottomSheetComponent extends Component {
  @service store! : StoreService;
  @tracked state! : number;

  constructor(...args) {
    super(...args);
    this.state = 0;
  }

  get isMenuState() {
    return this.state === 0 ? true : false;
  }

  get isMeasureState() {
    return this.state === 1 ? true : false;
  }

  get isTrainingState() {
    return this.state === 2 ? true : false;
  }

  @action
  setMeasuresState() {
    this.state = 1;
  }

  @action
  setTrainingState() {
    this.state = 2;
  }

  @action
  async saveMeasures(measure: Measure) {
    const { event, onSave } : { event: Event, onSave: (event: Event, measure?: Measure, training?: Training) => void } = this.args;
    onSave(event, measure);
  }

  @action
  async saveTraining() {
    const { event, onSave } : { event: Event, onSave: (event: Event, measure?: Measure, training?: Training) => void } = this.args;

    let training;
    if (event.trainingId) {
      training = await this.store.findRecord('training', event.trainingId);
    } else {
      training = await this.store.createRecord('training');

      // TODO: fill training model

      onSave(event, undefined, training);
    }
  }
}