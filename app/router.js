import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('calendar', function () {
    this.route('activity', { path: '/:event_id' }, function () {
      this.route('measure-new', { path: 'measure' });
      this.route('measure-show', { path: 'measure/:measures_id' });
      this.route('routine-new', { path: 'routine' });
      this.route('routine-show', { path: 'routine/:routine_id' });
    });
  });
  this.route('statistics');
});

export default Router;
