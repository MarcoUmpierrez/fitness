import Component from '@glimmer/component';
import { action } from '@ember/object';
import { readFlag, changeFlag } from 'efitness/utils/binary-helper';

interface Args {
  isPill: boolean,
  label: string,
  index: number,
  flags: number
  onChange: (flags: number) => void
}

export default class PeriodSelectorComponent extends Component<Args> {
  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  get isSelected() {
    const { flags, index } = this.args;
    return readFlag(flags, index);
  }

  @action changeFlag() {
    const { onChange, flags, index } = this.args;
    onChange(changeFlag(flags, index));
  }
}