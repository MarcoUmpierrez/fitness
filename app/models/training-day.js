import DS from 'ember-data';
const { Model, belongsTo, attr } = DS;

export default class TrainingDayModel extends Model {
  trainingRoutine = belongsTo('training-routine');
  trainingRoutineId = attr('string');
  measure = belongsTo('measure');
  measureId = attr('string');
  day = attr('date');
  completed = attr('boolean');
}
