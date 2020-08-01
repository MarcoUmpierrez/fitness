import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { months } from 'efitness/utils/constants';
import { dateHelper } from 'efitness/utils/calendar-helper';

export default class Calendar {
  @tracked selectedDate!: Date;
  @tracked date?: Date;

  constructor() {
    this.date = new Date();
    this.selectedDate = new Date();
  }

  get month() {
    if (this.date) {
      return `${months[this.date.getMonth()]} ${this.date.getFullYear()}`;
    }

    return null;
  }

  @action incMonth() {
    if (this.date) {
      this.date = dateHelper.increaseMonth(this.date);
    }
  }

  @action decMonth() {
    if (this.date) {
      this.date = dateHelper.decreaseMonth(this.date);
    }
  }
}
