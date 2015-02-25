import DS from 'ember-data';

var User = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),

  fullName: function () {
    return [this.get('last_name'), this.get('first_name')].join(", ");
  }.property('first_name,last_name')
});


User.reopenClass({
  FIXTURES: [
    {id: 1, first_name: 'Bob', last_name: 'Smith'}
  ]
});

export default User;
