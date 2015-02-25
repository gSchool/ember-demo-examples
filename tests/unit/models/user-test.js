import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForModel('user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  Ember.run(function () {
    model.setProperties({
      first_name: 'Betty',
      last_name: 'White',
    });
  });
  assert.equal(model.get('fullName'), 'White, Betty');
});
