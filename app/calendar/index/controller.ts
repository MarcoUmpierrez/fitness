import Controller from '@ember/controller';
import { computed, action } from '@ember/object';
import { months } from '../../utils/calendar-helper';
import Event from 'fitness/models/event';

interface Activity {
  url: string,
  measureOrRoutineId?: string,
  icon: string,
  iconTitle: string,
  label: string
}

export default class CalendarController extends Controller {
  date?: Date;
  showBottomSheet?: boolean;

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
  toggleBottomSheet() {
    this.toggleProperty('showBottomSheet');
  }

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
  selectDay(eventId: string) {
    let selectedActivities: Activity[] = [];
    if (eventId) {
      this.store.findRecord('event', eventId).then((event: Event) => {
        if (event.measureId) {
          selectedActivities.push(this.createMeasure('measure-show', 'Show', event.measureId));
        } else {
          selectedActivities.push(this.createMeasure('measure-new', 'Add'));
        }

        if (event.routineId) {
          selectedActivities.push(this.createRoutine('routine-show', 'Show', event.routineId));
        } else {
          selectedActivities.push(this.createRoutine('routine-new', 'Add'));
        }
      });
    } else {
      selectedActivities.push(this.createMeasure('measure-new', 'Add'));
      selectedActivities.push(this.createRoutine('routine-new', 'Add'));
    }

    if (selectedActivities) {
      this.set('selectedActivities', selectedActivities);
    }

    this.toggleProperty('showBottomSheet');
  }
}