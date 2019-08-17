import Controller from '@ember/controller';
import { computed } from '@ember/object';
import Measure from 'fitness/models/measure';

export default class StatisticsController extends Controller {
  model!: Measure[];

  @computed('model')
  get sortedModel(): Measure[] {
    return this.model.sortBy('date');
  }

  @computed('sortedModel')
  get weight(): number[] {
    return this.sortedModel.map((measure: Measure) => {
      return measure.weight;
    });
  }

  @computed('sortedModel')
  get userMeasures(): UserMeasures {
    return { height: 1.70, weight: 71 };
  }

  @computed('sortedModel')
  get fat(): number[] {
    return this.sortedModel.map((measure: Measure) => {
      return measure.fat;
    });
  }

  @computed('sortedModel')
  get water(): number[] {
    return this.sortedModel.map((measure: Measure) => {
      return measure.water;
    });
  }

  @computed('sortedModel')
  get muscle(): number[] {
    return this.sortedModel.map((measure: Measure) => {
      return measure.muscle;
    });
  }

  @computed('sortedModel')
  get boneDensity(): number[] {
    return this.sortedModel.map((measure: Measure) => {
      return measure.boneDensity;
    });
  }

  @computed('period')
  get axisX() {
    // return ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return ['W1', 'W2', 'W3', 'W4', 'W5'];
  }

}