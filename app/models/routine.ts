import DS from 'ember-data';
import Exercise from './exercise';
const { Model, hasMany, attr } = DS;

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