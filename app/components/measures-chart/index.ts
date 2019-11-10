import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { StatisticsBox } from 'efitness/utils/wrappers';

interface Args {
  model: StatisticsBox[],
}

enum Period {
  week = 'week',
  month = 'month',
  year = 'year'
}

export default class MeasuresChartComponent extends Component<Args> {
  @tracked period!: Period;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
    this.period = Period.month;
  }

  get axisX(): string[] {
    if (this.period === Period.week) {
      return ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    } else if (this.period === Period.month) {
      return ['W1', 'W2', 'W3', 'W4', 'W5'];
    } else {
      return ['2019']
    }
  }

  @action selectPeriod(period: Period): void {
    this.period = period;
  }
}