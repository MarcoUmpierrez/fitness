class DateComparator {
  public eq(date1: Date, date2: Date): boolean {
    if (!date1 || !date2) {
      return false;
    }

    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  }

  public gte(date1: Date, date2: Date): boolean {
    return this.resetDate(date1) >= this.resetDate(date2);
  }

  public lte(date1: Date, date2: Date): boolean {
    return this.resetDate(date1) <= this.resetDate(date2);
  }

  private resetDate(date: Date): Date {
    let d = new Date(date.getTime());
    d.setHours(0, 0, 0, 0);
    return d;
  }
}

export const comparator = new DateComparator();

class DateHelper {
  private millisecondsInADay: number = 86400000;

  public getWeekDays(date: Date): { first: Date, last: Date } {
    let tmp = this.resetTime(date);
    let dayOfWeek = tmp.getDay();
    let offset = tmp.getDate() - dayOfWeek + (dayOfWeek == 0 ? -6 : 1);
    let first: Date = tmp;
    first.setDate(offset);
    let last: Date = new Date(first.getTime() + (6 * this.millisecondsInADay));
    return { first, last };
  }

  public increaseMonth(date: Date): Date {
    const tmp = new Date(date.getTime());
    tmp.setMonth(tmp.getMonth() + 1);
    return tmp;
  }

  public decreaseMonth(date: Date): Date {
    const tmp = new Date(date.getTime());
    tmp.setMonth(tmp.getMonth() - 1);
    return tmp;
  }

  public daysInMonth(date: Date): number {
    // jump to the next month and then set it back to the last day of the previous month with day = 0
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  public firstDayOfMonthInWeek(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  private resetTime(date: Date): Date {
    const tmp = new Date(date.getTime());
    tmp.setHours(0, 0, 0, 0);
    return tmp;
  }
}

export const dateHelper = new DateHelper();

class MonthGenerator {
  public generate(date: Date): Date[][] {
    let calendarDays: Date[] = this.generateDays(date);
    return this.divideIntoWeeks(calendarDays, 7);
  }

  private divideIntoWeeks = (array: Date[], weekSize: number): Date[][] => {
    var result = [];

    while (array.length) {
      result.push(array.splice(0, weekSize));
    }

    return result;
  }

  private generateDays(currentDate: Date): Date[] {
    const daysInPreviousMonth: number = dateHelper.daysInMonth(dateHelper.decreaseMonth(currentDate));
    const daysInCurrentMonth: number = dateHelper.daysInMonth(currentDate);

    let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const dayOfWeek = dateHelper.firstDayOfMonthInWeek(date);

    let day: number;
    let isCurrentMonth: boolean = dayOfWeek === 1;
    let isPreviousMonth: boolean = dayOfWeek !== 1;
    if (isCurrentMonth) {
      // month starts on Monday (1) so no need to worry about
      // showing the days of the previous month
      day = 1;
    } else {
      // month starts other day than Monday...
      if (dayOfWeek == 0) {
        // Sunday (0) because it's the first day of the week for English people
        day = daysInPreviousMonth - 5;
      } else {
        // on Tuesday (2) it shows the last day of the previous month
        // on Wednesday (3) it shows the last 2 days of the previous month
        // and so on
        day = daysInPreviousMonth - dayOfWeek + 2;
      }

      date.setMonth(date.getMonth() - 1);
    }


    let result: Date[] = [];
    for (let i = 0; i < 42; i++) {
      date.setDate(day);
      result.push(new Date(date.getTime()));

      day++;
      if (isPreviousMonth && day > daysInPreviousMonth) {
        day = 1;
        date = new Date(date.getFullYear(), date.getMonth() + 1, day);
        isPreviousMonth = false;
        isCurrentMonth = true;
      } else if (isCurrentMonth && day > daysInCurrentMonth) {
        day = 1;
        date = new Date(date.getFullYear(), date.getMonth() + 1, day);
        isCurrentMonth = false;
      }
    }

    return result;
  }
}

export const monthGenerator = new MonthGenerator();