import Route from '@ember/routing/route';

export default class StatisticsRoute extends Route {
  beforeModel() {
    this.store.findAll('measure');
  }

  model() {
    return this.store.findAll('event');
  }

}
