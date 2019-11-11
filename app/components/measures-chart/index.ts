import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { StatisticsBox } from 'efitness/utils/wrappers';
import { dateHelper } from 'efitness/utils/calendar-helper';
import { Period, months } from 'efitness/utils/constants';

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
      let { first, last } = dateHelper.getWeekDays(this.date);
      return `${first.getDate()}.${first.getMonth()}.${first.getFullYear()} - ${last.getDate()}.${last.getMonth()}.${last.getFullYear()}`;
    }

    return null;
  }

  get month(): string | null {
    if (this.period === Period.month) {
      return months[this.date.getMonth()];
    }

    return null;
  }

  get year(): string | null {
    if (this.period === Period.year) {
      return this.date.getFullYear().toString();
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

  @action previousYear(): void {
    this.date.setFullYear(this.date.getFullYear() - 1);
    this.date = this.date;
  }

  @action nextYear(): void {
    this.date.setFullYear(this.date.getFullYear() + 1);
    this.date = this.date;
  }

  @action previousMonth(): void {
    this.date.setMonth(this.date.getMonth() - 1);
    this.date = this.date;
  }

  @action nextMonth(): void {
    this.date.setMonth(this.date.getMonth() + 1);
    this.date = this.date;
  }
}