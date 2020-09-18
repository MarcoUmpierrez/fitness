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
  @tracked public declare weight: string;
  @tracked public declare fat: string;
  @tracked public declare water: string;
  @tracked public declare muscle: string;
  @tracked public declare boneDensity: string;
}

export class StatisticsBox extends MeasuresBox {
  public declare date: Date;
}