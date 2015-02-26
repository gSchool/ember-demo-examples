import Ember from 'ember';
import DS from 'ember-data';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import User from 'testing-demo/models/user';

var application;

module('Acceptance: Homepage', {
  beforeEach: function() {
    User.reopenClass({
      FIXTURES: [
        {id: 1, first_name: 'Jo', last_name: 'Jones'}
      ]
    });

    application = startApp();
    application.__container__.resolveCache['adapter:application'] = DS.FixtureAdapter;
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
    assert.equal(find('header > h1').text().trim(), 'My Awesome App');
  });

  click('a:contains("Users")');

  andThen(function () {
    assert.equal(find('.user:first').text().trim(), 'Jones, Jo');
  });

  fillIn('input.first-name', 'Bob');
  fillIn('input.last-name', 'Smith');
  click('button:contains("Create User")');

  andThen(function () {
    assert.equal(find('.user:last').text().trim(), 'Smith, Bob');
  });
});
