import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('calendar', function () {
    this.route('activity');
  });
  this.route('measures', function () {
    this.route('new');
  });
  this.route('statistics');
});

export default Router;
