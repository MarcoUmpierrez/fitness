import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { StatisticsBox } from 'efitness/utils/wrappers';
import { getWeekDays, Period } from 'efitness/utils/calendar-helper';

interface Args {
  model: StatisticsBox[],
}

export default class MeasuresChartComponent extends Component<Args> {
  @tracked period!: Period;
  @tracked date!: Date;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
    this.date = new Date();
    this.period = Period.week;
  }

  get week(): string | null {
    if (this.period === Period.week) {
      let { first, last } = getWeekDays(this.date);
      return `${first.getDate()}.${first.getMonth()}.${first.getFullYear()} - ${last.getDate()}.${last.getMonth()}.${last.getFullYear()}`;
    }

    return null;
  }

  @action selectPeriod(period: Period): void {
    this.period = period;
  }

  @action previousWeek(): void {
    this.date.setDate(this.date.getDate() - 7);
    this.date = this.date;
  }

  @action nextWeek(): void {
    this.date.setDate(this.date.getDate() + 7);
    this.date = this.date;
  }
}