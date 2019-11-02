import Component from '@glimmer/component';
import { action } from '@ember/object';
import StoreService from 'ember-data/store';
import { inject as service } from '@ember/service';
import Event from 'efitness/models/event';
import Measure from 'efitness/models/measure';

export default class MeasureFormComponent extends Component {
  @service store! : StoreService;
  measure!: Measure;

  constructor(...args) {
    super(...args);
    const { event } : { event: Event } = this.args;
    if (event.measureId) {
      this.measure = this.store.findRecord('measure', event.measureId);
    } else {
      this.measure = this.store.createRecord('measure');
    }
  }

  @action
  onSave() {
    this.measure.weight = this.getInputValue('inline-weight');
    this.measure.fat = this.getInputValue('inline-fat');
    this.measure.water = this.getInputValue('inline-water');
    this.measure.muscle = this.getInputValue('inline-muscle');
    this.measure.boneDensity = this.getInputValue('inline-bone-density');
    this.args.onSave(this.measure);
  }

  getInputValue(id:string):number {
    return parseFloat((document.getElementById(id) as HTMLInputElement).value);
  }
}