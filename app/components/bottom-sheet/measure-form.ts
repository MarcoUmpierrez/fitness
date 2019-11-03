import Component from '@glimmer/component';
import { action } from '@ember/object';
import StoreService from 'ember-data/store';
import { inject as service } from '@ember/service';
import Measure from 'efitness/models/measure';

interface Args {
  date: Date,
  measure: Measure | null,
  onClose: () => void,
  onSave: (weight: number, fat: number, water: number, muscle: number, boneDensity: number) => void,
}

export default class MeasureFormComponent extends Component<Args> {
  @service store! : StoreService;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  didInsertElement() {
    const { measure } = this.args;
    if (measure) {
      this.setInputValue('inline-weight', measure.weight);
      this.setInputValue('inline-fat', measure.fat);
      this.setInputValue('inline-water', measure.water);
      this.setInputValue('inline-muscle', measure.muscle);
      this.setInputValue('inline-bone-density', measure.boneDensity);
    }
  }

  @action onSave() {
    const { onSave } = this.args;
    let weight = this.getInputValue('inline-weight');
    let fat = this.getInputValue('inline-fat');
    let water = this.getInputValue('inline-water');
    let muscle = this.getInputValue('inline-muscle');
    let boneDensity = this.getInputValue('inline-bone-density');
    onSave(weight, fat, water, muscle, boneDensity);
  }

  getInputValue(id:string) : number {
    return parseFloat((document.getElementById(id) as HTMLInputElement).value);
  }

  setInputValue(id:string, value: number) {
    (document.getElementById(id) as HTMLInputElement).value = value.toString();
  }
}