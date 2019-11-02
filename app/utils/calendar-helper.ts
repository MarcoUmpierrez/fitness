export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'Mai',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const days: string[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];


export const isSameDay = (date1: Date, date2: Date): boolean => {
  if (!date1 || !date2) {
    return false;
  }

  return date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();
}

export const increaseMonth = (date: Date): Date => {
  const tmp = new Date(date.getTime());
  tmp.setMonth(tmp.getMonth() + 1);
  return tmp;
};

export const decreaseMonth = (date: Date): Date => {
  const tmp = new Date(date.getTime());
  tmp.setMonth(tmp.getMonth() - 1);
  return tmp;
};

export const daysInMonth = (date: Date): number => {
  // jump to the next month and then set it back to the last day of the previous month with day = 0
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

// Days of the week from 1 to 7
export const firstDayOfMonthInWeek = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

export const calendarMonth = (date: Date): CalendarNode[][] => {
  let calendarDays: CalendarNode[] = _generateDays(date);
  return _divideIntoWeeks(calendarDays, 7);
};

const _divideIntoWeeks = (array: CalendarNode[], weekSize:number): CalendarNode[][] => {
  var result = [];

  while (array.length) {
    result.push(array.splice(0, weekSize));
  }

  return result;
}

const _generateDays = (currentDate: Date): CalendarNode[] => {
  const today = new Date();
  const daysInPreviousMonth: number = daysInMonth(decreaseMonth(currentDate));
  const daysInCurrentMonth: number = daysInMonth(currentDate);

  let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const dayOfWeek = firstDayOfMonthInWeek(date);

  let day : number;
  let isCurrentMonth : boolean = dayOfWeek === 1;
  let isPreviousMonth : boolean = dayOfWeek !== 1;
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


  let result: CalendarNode[] = [];
  for (let i = 0; i < 42; i++) {
    date.setDate(day);
    result.push({
      day: day,
      isCurrentMonth: isCurrentMonth,
      isToday: isSameDay(today, date),
      date: new Date(date.getTime())
    });

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
};