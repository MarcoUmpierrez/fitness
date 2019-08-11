import Ember from 'ember';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
  interface CalendarNode {
    day: number;
    isToday: boolean;
    isCurrentMonth: boolean;
    date: Date;
    eventId?: string;
  }
}

export {};
