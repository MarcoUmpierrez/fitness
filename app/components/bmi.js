import Component from '@glimmer/component';

export default class BMIComponent extends Component {
  get bmi() {
    const { measures } = this.args;
    const result = measures.weight / (measures.height * measures.height);
    return parseFloat(result.toFixed(1));
  }

  get bmiResult() {
    if (this.bmi <= 18.5) {
      return 'text-yellow-500 border-yellow-500';
    }

    if (this.bmi >= 25) {
      return 'text-red-600 border-red-600';
    }

    return 'text-green-600 border-green-600';
  }
}