import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MeasuresNewController extends Controller {
  @action
  save() {
    let trainingDay = this.store.createRecord('training-day', {
      day: new Date(),
      completed: true,
      measureId: this.model.id
    });
    trainingDay.set('measure', this.model);
    this.model.save();
    trainingDay.save();
    this.transitionToRoute('measures.index');
  }

  @action
  async transitionBack() {
    await this.model.destroyRecord();
    this.transitionToRoute('measures.index');
  }
}
