import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | measures', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:measures');
    assert.ok(route);
  });
});
