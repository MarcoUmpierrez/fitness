import DS from 'ember-data';
const { Model, attr } = DS;

export default class ExerciseModel extends Model {
  name = attr('string');
  description = attr('string');
  repetitions = attr('number');
  image = attr('string');
}
