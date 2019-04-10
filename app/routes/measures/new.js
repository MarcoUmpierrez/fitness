import Route from '@ember/routing/route';

export default class MeasuresNewRoute extends Route {
  model() {
    return this.store.createRecord('measure');
  }
}
