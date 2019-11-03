import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { toUp, toDown } from 'ember-animated/transitions/move-over';
import { Swipe } from 'efitness/utils/constants';
import { calendarMonth } from 'efitness/utils/calendar-helper';
import GesturesService from 'efitness/services/gestures';

interface Args {
  date:Date,
  increaseMonth: () => void,
  decreaseMonth: () => void,
  events: Event[],
  selectDay:(date: Date) => void
}

export default class CalendarGridComponent extends Component<Args> {
  @service gestures!: GesturesService;

  constructor(owner:unknown, args:Args) {
    super(owner, args);

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

  rules({ oldItems, newItems }: { oldItems: Date[], newItems : Date[]}) {
    if (oldItems[0] > newItems[0]) {
      return toDown;
    } else {
      return toUp;
    }
  }

  get month() {
    const { date } = this.args;
    if (date) {
      const month = calendarMonth(date);
      return month;
    }

    return [];
  }
}
