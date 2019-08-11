import Route from '@ember/routing/route';

export default class CalendarActivityRoute extends Route {
  model(routineId: string) {
    return this.store.peekRecord('routine', routineId);
  }
}
