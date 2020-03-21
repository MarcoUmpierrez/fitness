import Model, { attr, hasMany } from '@ember-data/model';
import Exercise from './exercise';

export default class Routine extends Model {
  @hasMany('exercise', { async: false }) exercises!: Exercise[];
  @attr() name!: string;
  @attr() createdOn!: Date;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    routine: Routine;
  }
}