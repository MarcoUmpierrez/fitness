import Ember from 'ember';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> { }
  // interface Function extends Ember.FunctionPrototypeExtensions {}

  interface UserMeasures {
    height: number;
    weight: number;
  }

  interface UserSettings {
    id: string;
    height: number | null;
  }

  interface MeasuresObj {
    weight?: number;
    fat?: number;
    water?: number;
    muscle?: number;
    boneDensity?: number;
  }

  interface TrainingObj {
    isRepeatable: boolean;
    repeatOnDays: number;
    repeatOnWeeks: number;
    lastUntil?: Date;
  }

  interface BackUp {
    events: object[],
    exercises: object[],
    measures: object[],
    routines: object[],
    trainings: object[],
    settings: (UserSettings | null)[],
    [index: string]: (object | UserSettings | null)[],
  }

  interface BackUpModel {
    id: string,
    type: string,
    attributes: object[]
  }
}

export { };