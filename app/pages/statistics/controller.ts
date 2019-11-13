import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import Event from 'efitness/models/event';
import Measure from 'efitness/models/measure';
import { StatisticsBox } from 'efitness/utils/wrappers';
import { userId } from 'efitness/utils/constants';
import { inject as service } from '@ember/service';
import SettingsService from 'efitness/services/settings';
import { task } from 'ember-concurrency';
import Task from 'ember-concurrency/task';

export default class StatisticsController extends Controller {
  @service settings!: SettingsService;

  @tracked model!: Event[];

  @tracked userMeasures!: UserMeasures;
  @tracked statistics!: StatisticsBox[];
  @tracked lastMeasures!: StatisticsBox;

  @(task(function*(this: StatisticsController) {
    let user: UserSettings = yield this.settings.load(userId);
    this.statistics = [];
    this.model.forEach((event: Event) => {
      if (event.measureId) {
        let statistic: StatisticsBox = new StatisticsBox();
        let measure: Measure = this.store.peekRecord('measure', event.measureId);
        if (measure) {
          statistic.date = event.day;
          statistic.weight = measure.weight;
          statistic.fat = measure.fat;
          statistic.water = measure.water;
          statistic.muscle = measure.muscle;
          statistic.boneDensity = measure.boneDensity;
          this.statistics.push(statistic);
        }
      }
    });

    this.statistics = this.statistics.sortBy('date');
    this.lastMeasures = this.statistics[this.statistics.length - 1];
    this.userMeasures = { height: user.height, weight: this.lastMeasures.weight };
  }).restartable()) measures!: Task;

}