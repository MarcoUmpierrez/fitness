import Component from '@glimmer/component';
import Event from 'efitness/models/event';
import { comparator } from 'efitness/utils/calendar-helper';

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
    return comparator.eq(date, today);
  }

  get day() {
    const { date } = this.args;
    return date.getDate();
  }

  get hasMeasure() : string | undefined {
    const { events, date } = this.args;
    let event : Event | undefined = events.find((record: Event) => comparator.eq(record.day, date))
    if (event) {
      return event.measureId;
    }

    return undefined;
  }

  get hasTraining() : string | undefined {
    const { events, date } = this.args;
    let event : Event | undefined = events.find((record: Event) => comparator.eq(record.day, date))
    if (event) {
      return event.trainingId;
    }

    return undefined;
  }
}
