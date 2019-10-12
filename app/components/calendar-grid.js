import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { toUp, toDown } from 'ember-animated/transitions/move-over';
import { Swipe } from 'efitness/utils/constants';
import { increaseMonth, decreaseMonth, calendarMonth, isSameDay } from 'efitness/utils/calendar-helper';

export default class CalendarGridComponent extends Component {
  // @service gestures;
  currentDate;
  events;
  @tracked showBottomSheet;

  constructor(...args) {
    super(...args);

    this.showBottomSheet = false;

    const { date } = this.args;
    this.currentDate = date;

    if (this.gestures) {
      this.gestures.addSwipeAction(() => {
        if (this.currentDate) {
          this.set('currentDate', increaseMonth(this.currentDate));
        }
      }, Swipe.Up);

      this.gestures.addSwipeAction(() => {
        if (this.currentDate) {
          this.set('currentDate', decreaseMonth(this.currentDate));
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
    if (this.currentDate) {
      const month = calendarMonth(this.currentDate);
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

  toggleBottomSheet() {
    this.showBottomSheet = !this.showBottomSheet;
  }

  selectDay(eventId, date) {
    console.log(eventId, date);
    //   if (this.selectedDate) {
    //     this.set('selectedDate', date);
    //   }

    //   let selectedActivities: Activity[] = [];
    //   if (eventId) {
    //     this.store.findRecord('event', eventId).then((event: Event) => {
    //       if (event.measureId) {
    //         selectedActivities.push(this.createMeasure('measure-show', 'Show', event.measureId));
    //       } else {
    //         selectedActivities.push(this.createMeasure('measure-new', 'Add'));
    //       }

    //       if (event.routineId) {
    //         selectedActivities.push(this.createRoutine('routine-show', 'Show', event.routineId));
    //       } else {
    //         selectedActivities.push(this.createRoutine('routine-new', 'Add'));
    //       }
    //     });
    //   } else {
    //     selectedActivities.push(this.createMeasure('measure-new', 'Add'));
    //     selectedActivities.push(this.createRoutine('routine-new', 'Add'));
    //   }

    //   if (selectedActivities) {
    //     this.set('selectedActivities', selectedActivities);
    //   }    
    this.selectedDay = { eventId, date };
    this.toggleBottomSheet();
    //this.transitionToRoute('calendar.measures');
  }
}
