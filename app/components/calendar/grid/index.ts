import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { toUp, toDown } from 'ember-animated/transitions/move-over';
import { Swipe } from 'efitness/utils/constants';
import { monthGenerator } from 'efitness/utils/calendar-helper';
import GesturesService from 'efitness/services/gestures';

interface CalendarGridArgs {
  date:Date,
  increaseMonth: () => void,
  decreaseMonth: () => void,
  events: Event[],
  selectDay:(date: Date) => void
}

export default class CalendarGridComponent extends Component<CalendarGridArgs> {
  @service public declare gestures: GesturesService;

  constructor(owner:unknown, args:CalendarGridArgs) {
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

  public willDestroy() {
    if (this.gestures) {
      this.gestures.removeSwipeAction(Swipe.Up);
      this.gestures.removeSwipeAction(Swipe.Down);
    }
  }

  public rules({ oldItems, newItems }: { oldItems: Date[], newItems : Date[]}) {
    if (oldItems[0] > newItems[0]) {
      return toDown;
    } else {
      return toUp;
    }
  }

  public get month() {
    const { date } = this.args;
    if (date) {
      const month = monthGenerator.generate(date);
      return month;
    }

    return [];
  }
}
