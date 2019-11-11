import { helper } from '@ember/component/helper';
import { dateHelper } from 'efitness/utils/calendar-helper';

export function formatDateInput([ date ] : [ Date ]) {
  if (date) {
    let localDate = dateHelper.increaseMonth(date);
    let day = localDate.getDate().toString();
    day = parseInt(day) > 9 ? day : `0${day}`;
    let month = localDate.getMonth().toString();
    month = parseInt(month) > 9 ? month : `0${month}`;
    return `${localDate.getFullYear()}-${month}-${day}`;
  } else {
    return '';
  }
}

export default helper(formatDateInput);
