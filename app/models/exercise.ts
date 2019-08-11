import DS from 'ember-data';
const { Model, attr } = DS;

export default class Exercise extends Model {
  @attr() name!: string;
  @attr() description?: string;
  @attr() repetitions?: number;
  @attr() image?: string;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    exercise: Exercise;
  }
}
