import Component from '@glimmer/component';
import { StatisticsBox } from 'efitness/utils/wrappers';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface Args {
  measures: StatisticsBox[],
}

export default class MeasuresInlineComponent extends Component<Args> {
  @tracked index!: number;

  constructor(owner: unknown, args: Args) {
    super(owner, args);

    this.index = this.args.measures.length - 1;
  }

  get measure(): StatisticsBox {
    return this.args.measures[this.index];
  }

  @action nextMeasure() {
    if (this.index < this.args.measures.length - 1) {
      this.index++;
    }
  }

  @action previousMeasure() {    
    if (this.index > 0) {
      this.index--;
    }
  }
}

