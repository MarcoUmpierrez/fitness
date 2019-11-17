import Controller from '@ember/controller';
import ENV from 'efitness/config/environment';

export default class ApplicationController extends Controller {
  get isProduction() {
    return ENV.environment === 'production';
  }
}