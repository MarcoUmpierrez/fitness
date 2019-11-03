import Component from '@glimmer/component';
import { isSameDay } from 'efitness/utils/calendar-helper';
import Event from 'efitness/models/event';

interface Args {
  date:Date,
  currentDate: Date,
  events:Event[],
  selectDay:(date: Date) => void
}

export default class CalendarCellComponent extends Component<Args> {

  get isCurrentMonth() {
    const { date, currentDate } = this.args;
    return date.getMonth() === currentDate.getMonth();
  }

  get isToday() {
    const { date } = this.args;
    const today = new Date();
    return isSameDay(date, today);
  }

  get day() {
    const { date } = this.args;
    return date.getDate();
  }
}
