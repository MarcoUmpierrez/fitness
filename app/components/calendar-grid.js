import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { toUp, toDown } from 'ember-animated/transitions/move-over';
import { Swipe } from 'efitness/utils/constants';
import { calendarMonth, isSameDay } from 'efitness/utils/calendar-helper';

export default class CalendarGridComponent extends Component {
  @service gestures;
  events;

  constructor(...args) {
    super(...args);

    const { date } = this.args;
    if (this.gestures) {
      this.gestures.addSwipeAction(() => {
        if (date) {
          this.args.increaseMonth();
        }
      }, Swipe.Up);

      this.gestures.addSwipeAction(() => {
        if (date) {
          this.args.decreaseMonth();
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

  get month() {
    const { date, events } = this.args;
    if (date) {
      const month = calendarMonth(date);
      for (const week of month) {
        for (const day of week) {
          if (events && events.length > 0) {
            events.forEach(event => {
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
