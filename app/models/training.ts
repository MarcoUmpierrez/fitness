import DS from 'ember-data';
const { Model, attr } = DS;

export default class Training extends Model {  
  @attr() date!: Date;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    training: Training;
  }
}