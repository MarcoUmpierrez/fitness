import DS from 'ember-data';
const { Model, belongsTo, hasMany, attr } = DS;

export default class TrainingRoutineModel extends Model {
  @belongsTo('training-day') trainingDay;
  @attr('string') trainingDayId;
  @hasMany('exercise') exercises;
}
