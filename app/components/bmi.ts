import Component from '@glimmer/component';

interface Args {
  measures: { height: number, weight: number },
}

export default class BMIComponent extends Component<Args> {
  get bmi(): number {
    const { measures } = this.args;
    const result = measures.weight / (measures.height * measures.height);
    return parseFloat(result.toFixed(1));
  }

  get bmiResult() {
    if (this.bmi <= 18.5) {
      return '#ECC94B';
    }

    if (this.bmi >= 25) {
      return '#E53E3E';
    }

    return '#2B6CB0';
  }
}