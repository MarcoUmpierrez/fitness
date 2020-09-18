import EmberRouter from '@ember/routing/router';
import config from 'efitness/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('calendar');
  this.route('routines');
  this.route('statistics');
  this.route('settings');
});
