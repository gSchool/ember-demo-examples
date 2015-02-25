import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Users', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /users', function(assert) {
  visit('/users');

  andThen(function() {
    assert.equal(currentPath(), 'users', "The path should be users");
    assert.equal(find("h1").text().trim(), 'Listing Users', "Users heading should be correct");
  });
});

test('creating a user', function(assert) {
  visit('/users');

  var lastName = 'Hite' + Math.random();
  fillIn('input.first-name', 'Betty');
  fillIn('input.last-name', lastName);
  click('button:contains("Create User")');

  andThen(function() {
    assert.equal(find(".user:last").text().trim(), lastName + ', Betty', "Full name should appear correctly");
    assert.equal(find(".first-name").val(), '', "Creating a user clears the first name field");
    assert.equal(find(".last-name").val(), '', "Creating a user clears the last name field");
  });
});

test('shows users from the store on page load', function(assert) {
  visit('/users');
  andThen(function() {
    assert.equal(find(".user:first").text().trim(), "Smith, Bob", "Shows data from the store");
  });
});
