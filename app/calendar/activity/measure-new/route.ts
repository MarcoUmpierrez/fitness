import Route from '@ember/routing/route';

export default class MeasureNewRoute extends Route {
  model() {
    return this.store.createRecord('measure');
  }
}
