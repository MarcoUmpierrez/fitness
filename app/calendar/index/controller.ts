import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { months } from '../../utils/calendar-helper';


export default class CalendarController extends Controller {
  date?: Date;

  init() {
    super.init();
    this.date = new Date();
  }

  @computed('date')
  get month() {
    if (this.date) {
      return `${months[this.date.getMonth()]} ${this.date.getFullYear()}`;
    }
  }
}