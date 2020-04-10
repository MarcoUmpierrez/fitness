import Model, { attr, belongsTo } from '@ember-data/model';
import Routine from './routine';
import Event from './event';
import { days, weeks } from '../utils/binary-helper';

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
  @attr({ defaultValue: days.None }) repeatOnDays!: number;
  @attr({ defaultValue: weeks.None }) repeatOnWeeks!: number;

  // In case of a repeatable training session, indicates
  // until when should be relevant
  @attr() lastUntil?: Date;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    training: Training;
  }
}