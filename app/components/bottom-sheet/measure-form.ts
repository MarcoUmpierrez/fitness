import Component from '@glimmer/component';
import { action } from '@ember/object';
import Measure from 'efitness/models/measure';
import { MeasuresBox } from 'efitness/utils/wrappers';

interface MeasureFormArgs {
  date: Date,
  model: Measure | null,
  onClose: () => void,
  onSave: (measures: MeasuresObj) => void,
}

export default class MeasureFormComponent extends Component<MeasureFormArgs> {
  public declare measures: MeasuresBox;

  constructor(owner: unknown, args: MeasureFormArgs) {
    super(owner, args);

    this.measures = new MeasuresBox();
    const { model } = this.args;
    if (model) {
      this.measures.weight = model.weight;
      this.measures.fat = model.fat;
      this.measures.water = model.water;
      this.measures.muscle = model.muscle;
      this.measures.boneDensity = model.boneDensity;
    }
  }

  @action public onInput({ target: { id, value } }:  { target: { id: string, value: string }}) {
    switch (id) {
      case 'inline-weight':
        this.measures.weight = parseFloat(value);
        break;
      case 'inline-fat':
        this.measures.fat = parseFloat(value);
        break;
      case 'inline-water':
        this.measures.water = parseFloat(value);
        break;
      case 'inline-muscle':
        this.measures.muscle = parseFloat(value);
        break;
      case 'inline-bone-density':
        this.measures.boneDensity = parseFloat(value);
        break;

      default:
        break;
    }
  }

  @action public save() {
    const { onSave } = this.args;
    onSave(this.measures);
  }
}