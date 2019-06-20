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
    const measuresId = this.model.id;
    await this.model.destroyRecord()

    const trainingDays = await this.store.findAll('training-day');
    let trainingDay = null;
    trainingDays.forEach(day => {
      if (day.measuresId === measuresId) {
        trainingDay = day
      }
    })

    if (trainingDay) {
      await trainingDay.destroyRecord();
    }

    this.transitionToRoute('measures.index');
  }

  @action
  transitionBack() {
    this.transitionToRoute('measures.index')
  }
}
