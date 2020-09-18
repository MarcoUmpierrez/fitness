import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { StatisticsBox } from 'efitness/utils/wrappers';
import { dateHelper } from 'efitness/utils/calendar-helper';
import { Period, months } from 'efitness/utils/constants';

interface MeasuresChartArgs {
  model: StatisticsBox[],
}

export default class MeasuresChartComponent extends Component<MeasuresChartArgs> {
  @tracked public declare period: Period;
  @tracked public declare date: Date;

  constructor(owner: unknown, args: MeasuresChartArgs) {
    super(owner, args);
    this.date = new Date();
    this.period = Period.week;
  }

  public get week(): string | null {
    if (this.period === Period.week) {
      let { first, last } = dateHelper.getWeekDays(this.date);
      return `${first.getDate()} ${months[first.getMonth()].substring(0, 3).toUpperCase()} - ${last.getDate()} ${months[last.getMonth()].substring(0, 3).toUpperCase()}`;
    }

    return null;
  }

  public get month(): string | null {
    if (this.period === Period.month) {
      return months[this.date.getMonth()];
    }

    return null;
  }

  public get year(): string | null {
    if (this.period === Period.year) {
      return this.date.getFullYear().toString();
    }

    return null;
  }

  @action public selectPeriod(period: Period): void {
    this.period = period;
  }

  @action public previousWeek(): void {
    this.date.setDate(this.date.getDate() - 7);
    this.date = this.date;
  }

  @action public nextWeek(): void {
    this.date.setDate(this.date.getDate() + 7);
    this.date = this.date;
  }

  @action public previousYear(): void {
    this.date.setFullYear(this.date.getFullYear() - 1);
    this.date = this.date;
  }

  @action public nextYear(): void {
    this.date.setFullYear(this.date.getFullYear() + 1);
    this.date = this.date;
  }

  @action public previousMonth(): void {
    this.date.setMonth(this.date.getMonth() - 1);
    this.date = this.date;
  }

  @action public nextMonth(): void {
    this.date.setMonth(this.date.getMonth() + 1);
    this.date = this.date;
  }
}