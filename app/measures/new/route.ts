import BaseRoute from '../../common/base';

export default class MeasuresNewRoute extends BaseRoute {
  leftRoute = null;
  rightRoute = null;
  model() {
    return this.store.createRecord('measure');
  }
}
