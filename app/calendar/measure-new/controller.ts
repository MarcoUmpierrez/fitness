import Controller from '@ember/controller';
import { action } from '@ember/object';
import Measure from 'fitness/models/measure';
import { inject as service } from '@ember/service';
import SelectedDateService from 'fitness/services/selected-date';

export default class MeasuresNewController extends Controller {
  @service
  selectedDate?: SelectedDateService;

  @action
  save() {
    if (!this.selectedDate) {
      return;
    }

    let measure: Measure = this.model;
    if (!measure.muscle && !measure.water && !measure.weight && !measure.boneDensity && !measure.fat) {
      return;
    }

    this.model.set('date', this.selectedDate.date);
    this.model.save();

    this.transitionToRoute('calendar');
  }

  @action
  transitionBack() {
    this.transitionToRoute('calendar');
  }
}
