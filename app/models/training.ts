import Model, { attr, belongsTo } from '@ember-data/model';
import Routine from './routine';
import Event from './event';

export default class Training extends Model {
  @belongsTo('event', { async: false }) event?: Event;
  @belongsTo('routine', { async: false }) routine?: Routine;

  @attr() eventId?: string;
  @attr() routineId?: string;

  // In the case of a unique training session,
  // it can be marked as completed
  @attr({ defaultValue: false }) completed!: boolean;

  // Specifies if the training session can be repeated over time
  @attr({ defaultValue: false }) isRepeatable!: boolean;

  /* Binary value to represent each day of the week
     Monday:    0000001
     Tuesday:   0000010
     Wednesday: 0000100
     Thursday:  0001000
     Friday:    0010000
     Saturday:  0100000
     Sunday:    1000000
  */
  @attr({ defaultValue: 0b0000000 }) repeatOnDays!: number;

  /* Binary value to represent each week of the month
     Week 1: 0001
     Week 2: 0010
     Week 3: 0100
     Week 4: 1000
  */
  @attr({ defaultValue: 0b0000 }) repeatOnWeeks!: number;

  // In case of a repeatable training session, indicates
  // until when should be relevant
  @attr() lastUntil?: Date;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    training: Training;
  }
}