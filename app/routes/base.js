import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BaseRoute extends Route {
  @service gestures;

  @action
  didTransition() {
    this.gestures.removeHorizontalTransitions();
    this.gestures.addHorizontalTransitions(this.leftRoute, this.rightRoute);
  }
}
