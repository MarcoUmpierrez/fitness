import Service from '@ember/service';
import Hammer from 'hammerjs';
import { inject as service } from '@ember/service';

export default class GesturesService extends Service {
  @service router
  init() {
    const gestures = new Hammer(document.body);
    this.set('gestures', gestures);
  }

  addHorizontalTransitions(leftRoute, rightRoute) {
    const gestures = this.get('gestures');
    gestures.on('swipeleft', (event) => {
      if (leftRoute) {
        this.router.transitionTo(leftRoute);
      }
    });

    gestures.on('swiperight', (event) => {
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
