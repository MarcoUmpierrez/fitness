import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MeasuresNewController extends Controller {
  @action
  save() {
    let event = this.store.createRecord('event', {
      day: new Date(),
      completed: true,
      measureId: this.model.id
    });
    event.set('measure', this.model);
    this.model.save();
    event.save();
    this.transitionToRoute('measures.index');
  }

  @action
  async transitionBack() {
    await this.model.destroyRecord();
    this.transitionToRoute('measures.index');
  }
}
