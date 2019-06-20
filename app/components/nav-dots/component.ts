import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default class NavDotsComponent extends Component {
  @service router

  @computed('router.currentRouteName')
  get isCalendarRoute() {
    return this.router.currentRouteName.includes('calendar') ? 'light-on' : 'light-off';
  }

  @computed('router.currentRouteName')
  get isIndexRoute() {
    return this.router.currentRouteName === 'index' ? 'light-on' : 'light-off';
  }

  @computed('router.currentRouteName')
  get isMeasuresRoute() {
    return this.router.currentRouteName.includes('measures') ? 'light-on' : 'light-off';
  }

  @computed('router.currentRouteName')
  get isStatisticsRoute() {
    return this.router.currentRouteName.includes('statistics') ? 'light-on' : 'light-off';
  }
}
