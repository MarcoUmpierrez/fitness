import Component from '@glimmer/component';
import { action, set } from '@ember/object';
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

interface Days {
  Monday: number,
  Tuesday: number,
  Wednesday: number,
  Thursday: number,
  Friday: number,
  Saturday: number,
  Sunday: number
}

interface Weeks {
  Week1: number,
  Week2: number,
  Week3: number,
  Week4: number
}

export default class TrainingFormComponent extends Component<Args> {
  @service store! : StoreService;
  days!: Days;
  repeatOnDay!: number;
  weeks!: Weeks;
  repeatOnMonth!: number;
  isRepeatable!: boolean;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
    this.days = {
      Monday:    0b0000001,
      Tuesday:   0b0000010,
      Wednesday: 0b0000100,
      Thursday:  0b0001000,
      Friday:    0b0010000,
      Saturday:  0b0100000,
      Sunday:    0b1000000
    }

    this.repeatOnDay = 0b0000000;

    this.weeks = {
      Week1: 0b0001,
      Week2: 0b0010,
      Week3: 0b0100,
      Week4: 0b1000,
    }
    this.repeatOnMonth = 0b0000;

    this.isRepeatable = false;
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

  @action setIsRepeatable(value: boolean) {
    set(this, 'isRepeatable', value);
  }

  @action setRepeatOnDay(flags: number) {
    set(this, 'repeatOnDay', flags);
  }

  @action setRepeatOnMonth(flags: number) {
    set(this, 'repeatOnMonth', flags);
  }
}