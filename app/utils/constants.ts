// Database name for indexedDB
export const databaseName = 'FitnessAdapter';

// Database version number. Newer versions upgrade the schema if it's available
export const databaseVersion: number = 1;

// List of models
export const models: string[] = [
  'event',
  'exercise',
  'measure',
  'routine',
  'training',
];

export enum Swipe {
  Up = 'swipeup',
  Down = 'swipedown',
  Left = 'swipeleft',
  Right = 'swiperight',
}

export enum Period {
  week = 'week',
  month = 'month',
  year = 'year'
}

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

export const userId: string = '186731fc-2248-4626-9ceb-c5c724355d55';