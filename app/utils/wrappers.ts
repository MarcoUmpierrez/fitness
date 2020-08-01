import { tracked } from '@glimmer/tracking';

export class TrainingBox implements TrainingObj {
  @tracked repeatOnDays!: number;
  @tracked repeatOnWeeks!: number;
  @tracked isRepeatable!: boolean;
  @tracked lastUntil?:Date;

  constructor(isRepeatable: boolean, repeatOnDays: number, repeatOnWeeks: number, lastUntil?: Date) {
    this.isRepeatable = isRepeatable;
    this.repeatOnDays = repeatOnDays;
    this.repeatOnWeeks = repeatOnWeeks;
    this.lastUntil = lastUntil;
  }
}

export class MeasuresBox implements MeasuresObj {
  @tracked weight!: string;
  @tracked fat!: string;
  @tracked water!: string;
  @tracked muscle!: string;
  @tracked boneDensity!: string;
}

export class StatisticsBox extends MeasuresBox {
  date!: Date;
}