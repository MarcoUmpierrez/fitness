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
    const { event } : { event : Event } = this.args;
    if (event.measureId) {
      this.store.findRecord('measure', event.measureId).then((measure : Measure) => {
        (document.getElementById('inline-weight') as HTMLInputElement).value = measure.weight.toString();
        (document.getElementById('inline-fat') as HTMLInputElement).value = measure.fat.toString();
        (document.getElementById('inline-water') as HTMLInputElement).value = measure.water.toString();
        (document.getElementById('inline-muscle') as HTMLInputElement).value = measure.muscle.toString();
        (document.getElementById('inline-bone-density') as HTMLInputElement).value = measure.boneDensity.toString();
      });
    }
  }

  @action
  setTrainingState() {
    this.state = 2;
  }

  @action
  saveMeasures() {
    const { event, onSave } : { event: Event, onSave: (event: Event, measure?: Measure, training?: Training) => void } = this.args;
    let record = this.store.createRecord('measure')
    record.weight = parseFloat((document.getElementById('inline-weight') as HTMLInputElement).value);
    record.fat = parseFloat((document.getElementById('inline-fat') as HTMLInputElement).value);
    record.water = parseFloat((document.getElementById('inline-water') as HTMLInputElement).value);
    record.muscle = parseFloat((document.getElementById('inline-muscle') as HTMLInputElement).value);
    record.boneDensity = parseFloat((document.getElementById('inline-bone-density') as HTMLInputElement).value);

    onSave(event, record);
  }
}