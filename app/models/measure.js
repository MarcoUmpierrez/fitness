import DS from 'ember-data';
const { Model, belongsTo, attr } = DS;

export default class MeasureModel extends Model {
  @belongsTo('training-day') trainingDay;
  @attr('string') trainingDayId;
  @attr('number') weight;
  @attr('number') water;
  @attr('number') fat;
  @attr('number') muscle;
  @attr('number') boneDensity;
}
