import Component from '@ember/component';
import {
  increaseMonth,
  decreaseMonth,
  calendarMonth,
  isSameDay
} from '../../utils/calendar-helper';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { toUp, toDown } from 'ember-animated/transitions/move-over';
import { Swipe } from '../../utils/constants';
import GesturesService from 'fitness/services/gestures';
import Event from '../../models/event';

export default class CalendarGridComponent extends Component {
  @service gestures?:GesturesService;

  date?:Date;
  events?:Event[];

  init() {
    super.init();

    if (this.gestures) {
      this.gestures.addSwipeAction(() => {
        if (this.date) {
          this.set('date', increaseMonth(this.date));
        }
      }, Swipe.Up);  

      this.gestures.addSwipeAction(() => {
        if (this.date) {
          this.set('date', decreaseMonth(this.date));
        }
      }, Swipe.Down);
    }
  }

  willDestroy() {
    if (this.gestures) {
      this.gestures.removeSwipeAction(Swipe.Up);
      this.gestures.removeSwipeAction(Swipe.Down);
    }
  }

  rules({ oldItems, newItems }) {
    if (oldItems[0] > newItems[0]) {
      return toDown;
    } else {
      return toUp;
    }
  }

  @computed('date')
  get month() : CalendarNode[][] {
    if (this.date) {
      const month: CalendarNode[][] = calendarMonth(this.date);
      for (const week of month) {
        for (const day of week) {
          if (this.events && this.events.length > 0) {
            this.events.forEach(event => {
              if (isSameDay(day.date, event.day)) {
                day.eventId = event.id;
              }
            });
          }
        }
      }

      return month;
    }

    return [];
  }
}
