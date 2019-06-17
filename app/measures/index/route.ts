import Route from '@ember/routing/route';

export default class MeasuresIndexRoute extends Route {
  model() {
    return this.store.findAll('training-day');
  }
}
