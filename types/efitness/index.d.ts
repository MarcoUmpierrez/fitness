import Ember from 'ember';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
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
}

export {};