import Ember from 'ember';

import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  Ember.run(function () {
    model.setProperties({
      first_name: "Ed",
      last_name: "Eades",
    });
  });
  assert.equal(model.get('fullName'), 'Eades, Ed');
});
