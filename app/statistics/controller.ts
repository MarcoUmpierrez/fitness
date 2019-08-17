import Controller from '@ember/controller';
import { computed, action } from '@ember/object';
import Measure from 'fitness/models/measure';

enum Period {
  week = 'week',
  month = 'month',
  year = 'year'
}

export default class StatisticsController extends Controller {
  model!: Measure[];
  period!: Period;
  periodEnum!: Period;

  init() {
    super.init();
    this.set('periodEnum', Period);
    this.set('period', Period.month);
  }

  @computed('model', 'period')
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
    if (this.period === Period.week) {
      return ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    } else if (this.period === Period.month) {
      return ['W1', 'W2', 'W3', 'W4', 'W5'];
    } else {
      return ['2019']
    }
  }

  @action
  selectPeriod(period: Period):void {
    this.set('period', period);
  }

}