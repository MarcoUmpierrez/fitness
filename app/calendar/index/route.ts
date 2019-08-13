import Route from "@ember/routing/route";
import { action } from "@ember/object";

export default class CalendarRoute extends Route {
  model() {
    return this.store.findAll('event');
  }

  @action
  willTransition() {
    // disables overlay before transition
    this.controller.set('showBottomSheet', false);
  }
}
