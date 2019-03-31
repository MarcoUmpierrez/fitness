import DS from 'ember-data';
const { Model, belongsTo, attr } = DS;

export default class MeasureModel extends Model {
  trainingDay = belongsTo('training-day');
  trainingDayId = attr('string');
  weight = attr('number');
  water = attr('number');
  fat = attr('number');
  muscle = attr('number');
  boneDensity = attr('number');
}
