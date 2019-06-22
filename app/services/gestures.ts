import Service from '@ember/service';
import Hammer from 'hammerjs';
import { inject as service } from '@ember/service';

export default class GesturesService extends Service {
  @service router
  init() {
    const gestures = new Hammer(document.body);
    gestures.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    this.set('gestures', gestures);
  }

  addSwipeUpAction(callback:CallableFunction) {
    const gestures = this.get('gestures');
    gestures.on('swipeup', () => {
      callback();
    });
  }

  removeSwipeUpAction() {    
    const gestures = this.get('gestures');
    gestures.off('swipeup');
  }

  addSwipeDownAction(callback:CallableFunction) {
    const gestures = this.get('gestures');
    gestures.on('swipedown', () => {
      callback();
    });
  }

  removeSwipeDownAction() {    
    const gestures = this.get('gestures');
    gestures.off('swipedown');
  }

  addSwipeLeftAction(callback:CallableFunction) {
    const gestures = this.get('gestures');
    gestures.on('swipeleft', () => {
      callback();
    });
  }

  removeSwipeLeftAction() {    
    const gestures = this.get('gestures');
    gestures.off('swipeleft');
  }

  addSwipeRightAction(callback:CallableFunction) {
    const gestures = this.get('gestures');
    gestures.on('swiperight', () => {
      callback();
    });
  }

  removeSwipeRightAction() {    
    const gestures = this.get('gestures');
    gestures.off('swiperight');
  }
}
