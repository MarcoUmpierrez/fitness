import Controller from '@ember/controller';
import { computed, action, set } from '@ember/object';
import { months } from 'efitness/utils/calendar-helper';
import Event from 'efitness/models/event';
import { increaseMonth, decreaseMonth } from 'efitness/utils/calendar-helper';

interface Activity {
  url: string,
  measureOrRoutineId?: string,
  icon: string,
  iconTitle: string,
  label: string
}

interface SelectedDay {
  eventId: string,
  date: Date
}

export default class CalendarController extends Controller {
  date?: Date;
  selectedDate?:Date;
  showBottomSheet?: Boolean;
  selectedDay?: SelectedDay;

  init() {
    super.init();
    this.date = new Date();
    this.showBottomSheet = false;
  }

  @computed('date')
  get month() {
    if (this.date) {
      return `${months[this.date.getMonth()]} ${this.date.getFullYear()}`;
    }

    return null;
  }

  @action 
  incMonth() {
    if (this.date) {
      set(this, 'date', increaseMonth(this.date));
    }
  }

  @action 
  decMonth() {
    if (this.date) {
      set(this, 'date', decreaseMonth(this.date));
    }
  }

  @action 
  createMeasure(url: string, label: string, measureId?: string): Activity {
    return {
      url: `calendar.${url}`,
      measureOrRoutineId: measureId,
      icon: 'weight',
      iconTitle: 'weight',
      label: `${label} measures`
    };
  }

  createRoutine(url: string, label: string, routineId?: string): Activity {
    return {
      url: `calendar.${url}`,
      measureOrRoutineId: routineId,
      icon: 'running',
      iconTitle: 'running',
      label: `${label} training`
    };
  }  

  @action
  toggleBottomSheet() {
    set(this, 'showBottomSheet', !this.showBottomSheet);
  }

  @action
  selectDay(eventId: string, date: Date): void {
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
    set(this, 'selectedDay', { eventId, date });
    this.toggleBottomSheet();
    //this.transitionToRoute('calendar.measures');
  }
}