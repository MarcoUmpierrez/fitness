import { helper } from '@ember/component/helper';
import { months } from 'efitness/utils/calendar-helper';

export function formatDate([ date ] : [ Date ]) {
  if (date) {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  } else {
    return '';
  }
}

export default helper(formatDate);
