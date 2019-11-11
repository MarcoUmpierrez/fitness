import Route from '@ember/routing/route';

export default class StatisticsRoute extends Route {
  beforeModel() {
    this.store.findAll('measure');
    this.store.findAll('user');
  }

  model() {
    return this.store.findAll('event');
  }

}
