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
  @tracked weight!: number;
  @tracked fat!: number;
  @tracked water!: number;
  @tracked muscle!: number;
  @tracked boneDensity!: number;
}

export class StatisticsBox extends MeasuresBox {
  date!: Date;
}