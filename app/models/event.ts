import DS from 'ember-data';
import Routine from './routine';
import Measure from './measure';
const { Model, belongsTo, attr } = DS;

export default class Event extends Model {
  @belongsTo('routine', { async: false }) routine?: Routine;
  @belongsTo('measure', { async: false }) measure?: Measure;
  @attr() day!: Date;
  @attr() routineId?: string;
  @attr() measureId?: string;
  @attr({ defaultValue: false }) completed!: boolean;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    event: Event;
  }
}