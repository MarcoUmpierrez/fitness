import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import Measure from 'efitness/models/measure';
import { StatisticsBox } from 'efitness/utils/wrappers';
import Event from 'efitness/models/event';



export default class StatisticsController extends Controller {
  @tracked model!: Event[];

  get userMeasures(): UserMeasures {
    return { height: 1.70, weight: 71 };
  }

  get statistics(): StatisticsBox[] {
    let statistics: StatisticsBox[] = [];
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
          statistics.push(statistic);
        }
      }
    });

    return statistics.sortBy('date');
  }

  get lastMeasures(): StatisticsBox {
    return this.statistics[this.statistics.length - 1];
  }

}