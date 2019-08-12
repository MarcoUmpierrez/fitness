import Controller from '@ember/controller';
import { computed, action } from '@ember/object';
import { months } from '../../utils/calendar-helper';
import Event from 'fitness/models/event';

interface Activity {
  url: string,
  eventId: string,
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

  createMeasure(url: string, eventId: string, label: string, measureId?: string): Activity {
    return {
      url: `calendar.activity.${url}`,
      eventId: eventId,
      measureOrRoutineId: measureId,
      icon: 'weight',
      iconTitle: 'weight',
      label: `${label} measures`
    };
  }

  createRoutine(url: string, eventId: string, label: string, routineId?: string): Activity {
    return {
      url: `calendar.activity.${url}`,
      eventId: eventId,
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
          selectedActivities.push(this.createMeasure('measure-show', event.id, 'Show', event.measureId));
        } else {
          selectedActivities.push(this.createMeasure('measure-new', event.id, 'Add'));
        }

        if (event.routineId) {
          selectedActivities.push(this.createRoutine('routine-show', event.id, 'Show', event.routineId));
        } else {
          selectedActivities.push(this.createRoutine('routine-new', event.id, 'Add'));
        }
      });
    } else {
      selectedActivities.push(this.createMeasure('measure-new', 'activity', 'Add'));
      selectedActivities.push(this.createRoutine('routine-new', 'activity', 'Add'));
    }

    if (selectedActivities) {
      this.set('selectedActivities', selectedActivities);
    }

    this.toggleProperty('showBottomSheet');
  }
}