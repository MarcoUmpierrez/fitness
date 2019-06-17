import { helper } from '@ember/component/helper';

const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export function formatDate([date]:[Date]):string {
  return `${date.getDate()} ${ months[date.getMonth()]}  ${date.getFullYear()}`
}

export default helper(formatDate);
