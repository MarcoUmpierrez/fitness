import Model, { attr, hasMany } from '@ember-data/model';
import Exercise from './exercise';
import Tag from './tag';

export default class Routine extends Model {
  @hasMany('exercise', { async: false }) exercises!: Exercise[];
  @hasMany('tag', { async: false }) tags!: Tag[];
  @attr() name!: string;
  @attr() createdOn!: Date;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    routine: Routine;
  }
}