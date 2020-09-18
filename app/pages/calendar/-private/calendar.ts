import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { months } from 'efitness/utils/constants';
import { dateHelper } from 'efitness/utils/calendar-helper';

export default class Calendar {
  @tracked public declare selectedDate: Date;
  @tracked public date?: Date;

  constructor() {
    this.date = new Date();
    this.selectedDate = new Date();
  }

  public get month() {
    if (this.date) {
      return `${months[this.date.getMonth()]} ${this.date.getFullYear()}`;
    }

    return null;
  }

  @action public incMonth() {
    if (this.date) {
      this.date = dateHelper.increaseMonth(this.date);
    }
  }

  @action public decMonth() {
    if (this.date) {
      this.date = dateHelper.decreaseMonth(this.date);
    }
  }
}
