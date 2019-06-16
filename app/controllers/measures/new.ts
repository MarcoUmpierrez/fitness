import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MeasuresNewController extends Controller {
  @action
  doStuff() {
    let trainingDay = this.store.createRecord('training-day', {
      day: new Date(),
      completed: true
    });
    trainingDay.set('measure', this.model);
    this.model.save();
    trainingDay.save();
  }
}
