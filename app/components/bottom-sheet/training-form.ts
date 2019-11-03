import Component from '@glimmer/component';
import { action } from '@ember/object';
import StoreService from 'ember-data/store';
import { inject as service } from '@ember/service';
import Routine from 'efitness/models/routine';
import Training from 'efitness/models/training';

interface Args {
  date: Date,
  training: Training | null,
  onClose: () => void,
  onSave: () => void,
}

export default class TrainingFormComponent extends Component<Args> {
  @service store! : StoreService;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  didInsertElement() {
    const { training }  = this.args;
    if (training) {
      // TODO: set values if training is defined
    }
  }

  get routines(): Routine[] {
    return this.store.peekAll('routine');
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