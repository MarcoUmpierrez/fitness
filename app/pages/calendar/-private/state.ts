import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CalendarState {
    @tracked state! : number;

    constructor() {
        this.state = 0;
    }    

    get isMenuState() {
        return this.state === 0;
    }

    get isMeasureState() {
        return this.state === 1;
    }

    get isTrainingState() {
        return this.state === 2;
    }

    @action setMeasuresState() {
      this.state = 1;
    }
  
    @action setTrainingState() {
      this.state = 2;
    }

    @action reset() {
        this.state = 0;
    }
}