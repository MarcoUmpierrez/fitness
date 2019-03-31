import DS from 'ember-data';
const { Model, belongsTo, hasMany, attr } = DS;

export default class TrainingRoutineModel extends Model {
  trainingDay = belongsTo('training-day');
  trainingDayId = attr('string');
  exercises = hasMany('exercise');
}
