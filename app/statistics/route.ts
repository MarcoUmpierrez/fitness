import Route from '@ember/routing/route';

export default class StatisticsRoute extends Route {
  model() {
    return this.store.findAll('measure');
  }
}
