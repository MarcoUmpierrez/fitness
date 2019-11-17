import DS from 'ember-data';
import Event from './event';
const { Model, attr, belongsTo } = DS;

export default class Measure extends Model {
  @belongsTo('event', { async: false }) event?: Event;
  @attr() eventId?: string;
  @attr() weight!: number;
  @attr() water!: number;
  @attr() fat!: number;
  @attr() muscle!: number;
  @attr() boneDensity!: number;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    measure: Measure;
  }
}