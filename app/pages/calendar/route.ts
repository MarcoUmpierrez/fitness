import Route from '@ember/routing/route';

export default class CalendarRoute extends Route {
  async model() {
    const [ events, measures, training, routine ] = await Promise.all([
      this.store.findAll('event'),
      this.store.findAll('measure'),
      this.store.findAll('training'),
      this.store.findAll('routine'),
    ]);

    return { events, measures, training, routine };
  }
}
