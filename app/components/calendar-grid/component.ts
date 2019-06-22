import Component from '@ember/component';
import {
  increaseMonth,
  decreaseMonth,
  calendarMonth
} from '../../utils/calendar-helper';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CalendarGridComponent extends Component {
  @service gestures;
  date?: Date;

  init() {
    super.init();

    this.date = new Date();

    this.gestures.addSwipeUpAction(() => {
      if (this.date) {
        this.set('date', increaseMonth(this.date));
      }
    });

    this.gestures.addSwipeDownAction(() => {
      if (this.date) {
        this.set('date', decreaseMonth(this.date));
      }
    });
  }

  willDestroy() {
    this.gestures.removeSwipeUpAction();
    this.gestures.removeSwipeDownAction();
  }

  @computed('date')
  get month() {
    if (this.date) {
      return calendarMonth(this.date);
    }

    return [];
  }
}
