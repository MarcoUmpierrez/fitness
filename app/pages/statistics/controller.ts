import Controller from '@ember/controller';
import Event from 'efitness/models/event';
import Measure from 'efitness/models/measure';
import { StatisticsBox } from 'efitness/utils/wrappers';

export default class StatisticsController extends Controller {
  public declare model: {events: Event[], measures: Measure[], userSettings?: UserSettings };

  public get statistics() : StatisticsBox[] {
    let statistics: StatisticsBox[] = [];
    this.model.events.forEach((event: Event) => {
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
          statistics.push(statistic);
        }
      }
    });

    return statistics.sortBy('date');;
  }

  public get userMeasures(): UserMeasures | null {
    if (this.model.userSettings && this.lastMeasures) {
      return { height: this.model.userSettings.height as number, weight: this.lastMeasures.weight}
    }
    return null;
  }

  public get lastMeasures(): StatisticsBox {
    return this.statistics[this.statistics.length - 1];
  }
}