import Service from '@ember/service';
import Hammer from 'hammerjs';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';

export default class GesturesService extends Service {
  @service router
  init() {
    const gestures = new Hammer(document.body);
    this.set('gestures', gestures);
  }

  addHorizontalTransitions(leftRoute:string, rightRoute:string) {
    const gestures = this.get('gestures');
    gestures.on('swipeleft', (event) => {
      assert('there is not left route defined', leftRoute !== undefined);
      if (leftRoute) {
        this.router.transitionTo(leftRoute);
      }
    });

    gestures.on('swiperight', (event) => {
      assert('there is not right route defined', rightRoute !== undefined);
      if (rightRoute) {
        this.router.transitionTo(rightRoute);
      }
    });
  }

  removeHorizontalTransitions() {
    const gestures = this.get('gestures');
    gestures.off('swipeleft');
    gestures.off('swiperight');
  }
}
