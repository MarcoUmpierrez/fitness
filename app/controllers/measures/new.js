import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MeasuresNewController extends Controller {
  @action
  doStuff() {
    this.model.save();
  }
}
