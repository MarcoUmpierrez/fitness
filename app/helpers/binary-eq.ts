import { helper } from '@ember/component/helper';
import { readFlag } from 'efitness/utils/binary-helper';

export function binaryEq([ val1, val2 ] : [ number, number ]) {
  if (!val1 || !val2) {
    return false;
  } else {
    return readFlag(val1, val2);
  }
}

export default helper(binaryEq);
