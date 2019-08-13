import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import SelectedDateService from 'fitness/services/selected-date';

export default class MeasureNewRoute extends Route {
  @service
  selectedDate?: SelectedDateService;

  model() {
    return this.store.createRecord('measure');
  }

  afterModel(model, transition) {
    if (this.selectedDate && this.selectedDate.date) {
      model.set('date', this.selectedDate.date);
    } else {
      model.set('date', new Date());
    }
  }
}
