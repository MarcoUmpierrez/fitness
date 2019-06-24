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

export const increaseMonth = (date: Date): Date => {
  const month = date.getMonth() + 1;

  if (month > 11) {
    return new Date(date.getFullYear() + 1, 0, 1);
  } else {
    return new Date(date.getFullYear(), month, 1);
  }
};

export const decreaseMonth = (date: Date): Date => {
  const month = date.getMonth() - 1;

  if (month < 0) {
    return new Date(date.getFullYear() - 1, 11, 1);
  } else {
    return new Date(date.getFullYear(), month, 1);
  }
};

export const daysInMonth = (date: Date): number => {
  const month: number = date.getMonth();
  return new Date(
    date.getFullYear(),
    month + 1 > 11 ? 0 : month + 1,
    0
  ).getDate();
};

export const daysInPreviousMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
};

// Days of the week from 1 to 7
export const firstDayOfMonthInWeek = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

export interface CalendarNode {
  day: number;
  isToday: boolean;
  isCurrentMonth: boolean;
}

export const calendarMonth = (date: Date): CalendarNode[][] => {
  const monthDays = daysInMonth(date);
  const dayOfWeek = firstDayOfMonthInWeek(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  let calendarDays: CalendarNode[];
  let dayNumber;
  if (dayOfWeek === 1) {
    // month starts on Monday
    dayNumber = 1;
    calendarDays = _generateDays(dayNumber, month, year, monthDays);
  } else {
    // month starts other day than Monday
    // fill previous day with days from the former month
    const previousMonthDays = daysInPreviousMonth(date);
    dayNumber = previousMonthDays - dayOfWeek + 2;
    calendarDays = _generateDays(dayNumber, month, year, monthDays, previousMonthDays);
  }
  
  return _divideIntoWeeks(calendarDays, 7);
};

const _divideIntoWeeks = (array: CalendarNode[], weekSize:number): CalendarNode[][] => {
  var result = [];
  
  while (array.length) {
    result.push(array.splice(0, weekSize));
  }
  
  return result;
}

const _generateDays = (
  day: number,
  month: number,
  year: number,
  daysInMonth: number,
  daysInPreviousMonth?: number
): CalendarNode[] => {
  
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  let isCurrentMonth = false;
  if (day === 1) {
    isCurrentMonth = true;
  }

  let result: CalendarNode[] = [];
  for (let i = 0; i < 35; i++) {
    result.push({
      day: day,
      isCurrentMonth: isCurrentMonth,
      isToday: day === todayDay && month === todayMonth && year === todayYear
    });

    day++;
    if (isCurrentMonth && day > daysInMonth) {
      day = 1;
      isCurrentMonth = false;
    } else if (!isCurrentMonth && daysInPreviousMonth && day > daysInPreviousMonth) {
      day = 1;
      isCurrentMonth = true;
    }
  }

  return result;
};