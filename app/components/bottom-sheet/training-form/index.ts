import Component from '@glimmer/component';
import { action } from '@ember/object';
import Store from '@ember-data/store';
import { inject as service } from '@ember/service';
import Routine from 'efitness/models/routine';
import Training from 'efitness/models/training';
import { Days, days, Weeks, weeks } from 'efitness/utils/binary-helper';
import { TrainingBox } from 'efitness/utils/wrappers';

interface Args {
  date: Date,
  model: Training | null,
  onClose: () => void,
  onSave: (training: TrainingObj) => void,
}

export default class TrainingFormComponent extends Component<Args> {
  @service store! : Store;
  training!: TrainingBox;
  weeks!: Weeks;
  days!: Days;

  constructor(owner: unknown, args: Args) {
    super(owner, args);

    this.days = days;
    this.weeks = weeks;

    this.training = new TrainingBox(false, days.None, weeks.None);
    const { model }  = this.args;
    if (model) {
      this.training.isRepeatable = model.isRepeatable;
      this.training.repeatOnDays = model.repeatOnDays;
      this.training.repeatOnWeeks = model.repeatOnWeeks;
      this.training.lastUntil = model.lastUntil;
    }
  }

  get routines(): Routine[] {
    return this.store.peekAll('routine');
  }

  @action setIsRepeatable(value: boolean) {
    this.training.isRepeatable = value;
  }

  @action setRepeatOnDays(flags: number) {
    this.training.repeatOnDays = flags;
  }

  @action setRepeatOnWeeks(flags: number) {
    this.training.repeatOnWeeks = flags;
  }

  @action onInput({ target: { valueAsDate } }:  { target: { valueAsDate: Date }}) {
    this.training.lastUntil = new Date(valueAsDate.getTime());
  }

  @action save() {
    const { onSave } = this.args;
    onSave(this.training);
  }
}