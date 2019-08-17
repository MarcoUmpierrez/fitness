import Component from '@ember/component';
import { computed } from '@ember/object';

export default class BMIComponent extends Component {
  measures!: UserMeasures;

  @computed('measures')
  get bmi(): number {
    const result = this.measures.weight / (this.measures.height * this.measures.height);
    return parseFloat(result.toFixed(1));
  }

  @computed('measures')
  get bmiResult(): string {
    if (this.bmi <= 18.5) {
      return 'underweight';
    }

    if (this.bmi >= 25) {
      return 'overweight';
    }

    return 'normal';
  }
};
