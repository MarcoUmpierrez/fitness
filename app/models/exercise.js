import DS from 'ember-data';
const { Model, attr } = DS;

export default class ExerciseModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('number') repetitions;
  @attr('string') image;
}
