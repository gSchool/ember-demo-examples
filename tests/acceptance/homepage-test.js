import Ember from 'ember';
import DS from 'ember-data';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

Ember.Application.initializer({
  name: 'jeff-fixture-store',
  after: "store",

  initialize: function(container, application) {
    // var store = DS.Store.extend({ adapter: DS.FixtureAdapter.extend() });
    // container.unregister('store:main');
    // container.register('store:main', store);
    // container.injection('controller', 'store', 'store:main');
    var store = container.lookup('store:main');
    store.set('defaultAdapter', DS.FixtureAdapter.extend());
  }
});

module('Acceptance: Homepage', {
  beforeEach: function() {
    application = startApp();
    // var fixtureAdapter = DS.FixtureAdapter.create();
    // var store = DS.Store.create({ adapter: fixtureAdapter });
    // application.register('store:main', store);

    //
    // application.register('data-adapter:main', DS.FixtureAdapter);
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

  fillIn('input.first-name', 'Bob');
  fillIn('input.last-name', 'Smith');
  click('button:contains("Create User")');

  andThen(function () {
    assert.equal(find('.user').text().trim(), 'Smith, Bob');
  });
});
