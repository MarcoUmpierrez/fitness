import DS from 'ember-data';
const { Model, attr } = DS;

export default class User extends Model {
  @attr() height!: number;
}

declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    user: User;
  }
}