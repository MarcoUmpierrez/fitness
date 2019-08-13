import Controller from '@ember/controller';
import { action } from '@ember/object';
import Measure from 'fitness/models/measure';

export default class MeasuresNewController extends Controller {
  @action
  save() {
    let measure: Measure = this.model;
    if (!measure.muscle && !measure.water && !measure.weight && !measure.boneDensity && !measure.fat) {
      return;
    }

    this.model.save();

    this.transitionToRoute('calendar');
  }

  @action
  transitionBack() {
    this.transitionToRoute('calendar');
  }
}
