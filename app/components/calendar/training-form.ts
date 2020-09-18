import Component from '@glimmer/component';
import { action } from '@ember/object';
import Store from '@ember-data/store';
import { inject as service } from '@ember/service';
import Routine from 'efitness/models/routine';
import Training from 'efitness/models/training';
import { Days, days, Weeks, weeks, changeFlag } from 'efitness/utils/binary-helper';
import { TrainingBox } from 'efitness/utils/wrappers';

interface TrainingFormArgs {
  date: Date,
  model: Training | null,
  onClose: () => void,
  onSave: (training: TrainingObj) => void,
}

export default class TrainingFormComponent extends Component<TrainingFormArgs> {
  @service public declare store: Store;
  public declare training: TrainingBox;
  public declare weeks: Weeks;
  public declare days: Days;

  constructor(owner: unknown, args: TrainingFormArgs) {
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

  public get routines(): Routine[] {
    return this.store.peekAll('routine');
  }

  @action public setIsRepeatable(value: boolean) {
    this.training.isRepeatable = value;
  }

  @action public setRepeatOnDays(index: number) {    
    const flags = changeFlag(this.training.repeatOnDays, index);
    this.training.repeatOnDays = flags;
  }

  @action public setRepeatOnWeeks(index: number) {
    const flags = changeFlag(this.training.repeatOnWeeks, index);
    this.training.repeatOnWeeks = flags;
  }

  @action public onInput({ target: { valueAsDate } }:  { target: { valueAsDate: Date }}) {
    this.training.lastUntil = new Date(valueAsDate.getTime());
  }

  @action public save() {
    const { onSave } = this.args;
    onSave(this.training);
  }
}