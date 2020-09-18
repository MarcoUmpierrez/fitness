import { tracked } from '@glimmer/tracking';

export class TrainingBox implements TrainingObj {
  @tracked public declare repeatOnDays: number;
  @tracked public declare repeatOnWeeks: number;
  @tracked public declare isRepeatable: boolean;
  @tracked public lastUntil?:Date;

  constructor(isRepeatable: boolean, repeatOnDays: number, repeatOnWeeks: number, lastUntil?: Date) {
    this.isRepeatable = isRepeatable;
    this.repeatOnDays = repeatOnDays;
    this.repeatOnWeeks = repeatOnWeeks;
    this.lastUntil = lastUntil;
  }
}

export class MeasuresBox implements MeasuresObj {
  @tracked public declare weight: number;
  @tracked public declare fat: number;
  @tracked public declare water: number;
  @tracked public declare muscle: number;
  @tracked public declare boneDensity: number;
}

export class StatisticsBox extends MeasuresBox {
  public declare date: Date;
}