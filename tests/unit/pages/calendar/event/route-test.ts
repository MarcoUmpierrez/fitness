import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | calendar/event', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:calendar/event');
    assert.ok(route);
  });
});
