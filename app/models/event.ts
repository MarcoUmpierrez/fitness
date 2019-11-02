import DS from 'ember-data';
import Training from './training';
import Measure from './measure';
const { Model, belongsTo, attr } = DS;

export default class Event extends Model {
  @belongsTo('training', { async: false }) training?: Training;
  @belongsTo('measure', { async: false }) measure?: Measure;
  @attr() day!: Date;
  @attr() trainingId?: string;
  @attr() measureId?: string;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    event: Event;
  }
}