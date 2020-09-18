import Component from '@glimmer/component';
import { StatisticsBox } from 'efitness/utils/wrappers';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface MeasuresInlineArgs {
  measures: StatisticsBox[],
}

export default class MeasuresInlineComponent extends Component<MeasuresInlineArgs> {
  @tracked public declare index: number;

  constructor(owner: unknown, args: MeasuresInlineArgs) {
    super(owner, args);

    this.index = this.args.measures.length - 1;
  }

  public get measure(): StatisticsBox {
    return this.args.measures[this.index];
  }

  @action public nextMeasure() {
    if (this.index < this.args.measures.length - 1) {
      this.index++;
    }
  }

  @action public previousMeasure() {    
    if (this.index > 0) {
      this.index--;
    }
  }
}

