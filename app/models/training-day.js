import DS from 'ember-data';
const { Model, belongsTo, attr } = DS;

export default class TrainingDayModel extends Model {
  @belongsTo('training-routine') trainingRoutine;
  @attr('string') trainingRoutineId;
  @belongsTo('measure') measure;
  @attr('string') measureId;
  @attr('date') day;
  @attr('boolean') completed;
}
