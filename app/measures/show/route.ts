import BaseRoute from '../../common/base';

export default class MeasuresShowRoute extends BaseRoute {
  leftRoute = null;
  rightRoute = null;
  model({ measures_id }: { measures_id: string }) {
    return this.store.findRecord('measure', measures_id)
  }
}
