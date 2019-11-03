import Route from '@ember/routing/route';

export default class CalendarRoute extends Route {
  model() {
    return this.store.findAll('event');
  }

  afterModel() {
    this.store.findAll('measure');
    this.store.findAll('training');
    this.store.findAll('routine');
  }
}
