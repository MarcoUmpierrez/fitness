import Model, { attr, belongsTo } from '@ember-data/model';
import Training from './training';
import Measure from './measure';

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