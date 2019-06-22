import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';

export default class BaseRoute extends Route {
  @service gestures;
  @service router;

  leftRoute:string|null = null;
  rightRoute:string|null = null;

  @action
  didTransition() {
    this.gestures.removeSwipeLeftAction();
    this.gestures.removeSwipeRightAction();
    
    this.gestures.addSwipeLeftAction(() => {
      assert('there is not left route defined', this.leftRoute !== undefined);
      if (this.leftRoute) {
        this.router.transitionTo(this.leftRoute);
      }
    });

    this.gestures.addSwipeRightAction(() => {
      assert('there is not right route defined', this.rightRoute !== undefined);
      if (this.rightRoute) {
        this.router.transitionTo(this.rightRoute);
      }
    });
  }
}
