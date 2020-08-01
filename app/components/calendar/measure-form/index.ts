import Component from '@glimmer/component';
import { action } from '@ember/object';
import Measure from 'efitness/models/measure';
import { MeasuresBox } from 'efitness/utils/wrappers';

interface Args {
  date: Date,
  model: Measure | null,
  onClose: () => void,
  onSave: (measures: MeasuresObj) => void,
}

export default class MeasureFormComponent extends Component<Args> {
  measures!: MeasuresBox;
  measurePattern: RegExp = /\d{1,3}([,|.]\d)?/;
  invalidMeasures: boolean = false;

  constructor(owner: unknown, args: Args) {
    super(owner, args);

    this.measures = new MeasuresBox();
    const { model } = this.args;
    if (model) {
      this.measures.weight = model.weight.toString();
      this.measures.fat = model.fat.toString();
      this.measures.water = model.water.toString();
      this.measures.muscle = model.muscle.toString();
      this.measures.boneDensity = model.boneDensity.toString();
    }
  }

  @action onInput({ target: { id, value } }:  { target: { id: string, value: string }}) {
    this.invalidMeasures = false;
    const sanitizedValue = value.replace(',', '.')
    if (sanitizedValue.match(this.measurePattern) && sanitizedValue.length <= 4) {
      switch (id) {
        case 'inline-weight':
          this.measures.weight = sanitizedValue;
          break;
        case 'inline-fat':
          this.measures.fat = sanitizedValue;
          break;
        case 'inline-water':
          this.measures.water = sanitizedValue;
          break;
        case 'inline-muscle':
          this.measures.muscle = sanitizedValue;
          break;
        case 'inline-bone-density':
          this.measures.boneDensity = sanitizedValue;
          break;

        default:
          break;
      }
    } else {
      this.invalidMeasures = true;
    }
  }

  @action save() {
    if (this.invalidMeasures) {
      alert('There are invalid measures. Please, fix them before saving');
    } else {
      this.args.onSave(this.measures);
    }
  }
}