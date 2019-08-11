import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MeasuresShowController extends Controller {
  @action
  save() {
    this.model.save();
    this.transitionToRoute('measures.index');
  }

  @action
  async delete() {
    const measureId = this.model.id;
    await this.model.destroyRecord()

    const events = await this.store.findAll('event');
    let event = null;
    events.forEach(day => {
      if (day.measureId === measureId) {
        event = day
      }
    })

    if (event) {
      await event.destroyRecord();
    }

    this.transitionToRoute('measures.index');
  }

  @action
  transitionBack() {
    this.transitionToRoute('measures.index')
  }
}
