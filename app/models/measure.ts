import DS from 'ember-data';
const { Model, attr } = DS;

export default class Measure extends Model {  
  @attr() date!: Date;
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