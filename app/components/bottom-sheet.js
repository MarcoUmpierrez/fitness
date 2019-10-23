import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BottomSheetComponent extends Component {
  @tracked state;

  constructor(...args) {
    super(...args);
    this.state = 0;
  }

  get isMenuState() {
    return this.state === 0 ? true : false;
  }

  get isMeasureState() {
    return this.state === 1 ? true : false;
  }

  get isTrainingState() {
    return this.state === 2 ? true : false;
  }

  @action
  setMeasuresState() {
    this.state = 1;
  }

  @action
  setTrainingState() {
    this.state = 2;
  }
}