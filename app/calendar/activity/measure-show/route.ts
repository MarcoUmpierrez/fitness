import Route from '@ember/routing/route';

export default class MeasuresShowRoute extends Route {
  model({ measures_id }: { measures_id: string }) {
    return this.store.findRecord('measure', measures_id)
  }
}
