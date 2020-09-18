import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import SettingsService from 'efitness/services/settings';
import { userId } from 'efitness/utils/constants';

export default class StatisticsRoute extends Route {
  @service public declare settings: SettingsService;

  public async model() {
    const [ events, measures, userSettings ] = await Promise.all([
      this.store.findAll('event'),
      this.store.findAll('measure'),
      this.settings.load(userId)
    ]);

    return { events, measures, userSettings };
  }
}
