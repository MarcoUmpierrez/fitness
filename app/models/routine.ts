import DS from 'ember-data';
import Event from './event';
import Exercise from './exercise';
const { Model, belongsTo, hasMany, attr } = DS;

export default class Routine extends Model {
  @belongsTo('event', { async: false }) event!: Event;
  @hasMany('exercise', { async: false }) exercises!: Exercise[];
  @attr() eventId!: string;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    routine: Routine;
  }
}