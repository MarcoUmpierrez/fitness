import Route from '@ember/routing/route';

export default class CalendarActivityRoute extends Route {
  model(eventId: string) {
    return this.store.peekRecord('event', eventId);
  }
}
