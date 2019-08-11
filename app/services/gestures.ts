import Service from '@ember/service';
import Hammer from 'hammerjs';
import { Swipe } from '../utils/constants';

export default class GesturesService extends Service {
  init() {
    super.init();
    const gestures = new Hammer(document.body);
    gestures.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    this.set('gestures', gestures);
  }

  addSwipeAction(callback:CallableFunction, direction: Swipe) {
    const gestures = this.get('gestures');
    gestures.on(direction, () => {
      callback();
    });
  }

  removeSwipeAction(direction: Swipe) {    
    const gestures = this.get('gestures');
    gestures.off(direction);
  }
}
