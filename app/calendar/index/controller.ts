import Controller from '@ember/controller';
import { computed, action } from '@ember/object';
import { months } from '../../utils/calendar-helper';
import Event from '../../models/event';

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

  @action
  selectDay(eventId: string) {
    let selectedActivities: Activity[];
    if (eventId) {
      this.store.findRecord('event', eventId).then((record: Event) => {
        selectedActivities = [
          { 
            url: 'calendar.activity.measure-show', 
            eventId: record.id, 
            measureOrRoutineId: record.measureId,
            icon: 'weight', 
            iconTitle: 'weight', 
            label: 'Show measures' 
          },
          { 
            url: 'calendar.activity.routine-new', 
            eventId: record.id, 
            measureOrRoutineId: record.routineId,
            icon: 'running', 
            iconTitle: 'running', 
            label: 'Show training' 
          }
        ];
      });
    } else {
      const event = this.store.createRecord('event');
      selectedActivities = [
        { 
          url: 'calendar.activity.measure-new', 
          eventId: event.id, 
          icon: 'weight', 
          iconTitle: 'weight', 
          label: 'Add measures' 
        },
        { 
          url: 'calendar.activity.routine-new', 
          eventId: event.id,  
          icon: 'running', 
          iconTitle: 'running', 
          label: 'Add training' 
        }
      ];
    }

    if (selectedActivities) {
      this.set('selectedActivities', selectedActivities);
    }

    this.toggleProperty('showBottomSheet');
  }
}