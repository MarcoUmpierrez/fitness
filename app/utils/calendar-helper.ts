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
}

export const decreaseMonth = (date: Date): Date => {
  const month = date.getMonth() - 1;

  if (month < 0) {
    return new Date(date.getFullYear() - 1, 11, 1);
  } else {
    return new Date(date.getFullYear(), month, 1);
  }
}

export const daysInMonth = (date: Date): number => {
  const month: number = date.getMonth();
  return new Date(date.getFullYear(), month + 1 > 11 ? 0 : month + 1, 0).getDate();
}

export const daysInPreviousMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

// Days of the week from 1 to 7
export const firstDayOfMonthInWeek = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

export const calendarMonth = (date: Date): number[][] => {
  const monthDays = daysInMonth(date);
  const dayOfWeek = firstDayOfMonthInWeek(date);
  let calendarDays: number[][] = []
  let dayNumber;
  if (dayOfWeek === 1) {
    // month starts on Monday
    dayNumber = 1;
    let { day, days } =  _generateWeek(dayNumber, monthDays);
    dayNumber = day;
    calendarDays.push(days);
  } else {
    // month starts other day than Monday
    // fill previous day with days from the former month
    const previousMonthDays = daysInPreviousMonth(date);
    dayNumber = previousMonthDays - dayOfWeek + 2;
    let { day, days } =  _generateWeek(dayNumber, previousMonthDays);
    dayNumber = day;
    calendarDays.push(days);
  }

  // generate the rest of the weeks
  for (let i = 0; i < 4; i++) {
    let { day, days } =  _generateWeek(dayNumber, monthDays);
    dayNumber = day;
    calendarDays.push(days);
  }

  return calendarDays;
}

// returns the day of the month used as index and the array for the week
const _generateWeek = (day: number, month: number): { day: number, days: number[] } => {
  let days: number[] = [];
  for (let j = 0; j < 7; j++) {
    days.push(day);
    day++;
    if (day > month) {
      day = 1;
    }
  }

  return { day, days };
}