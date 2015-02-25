import Ember from 'ember';

export default Ember.Controller.extend({

  names: [],

  actions: {

    createUser: function () {
      this.store.createRecord('user',{
        first_name: this.get('firstName'),
        last_name: this.get('lastName'),
      });

      this.set('firstName', null);
      this.set('lastName', null);

      this.transitionToRoute('users');
    }

  }

});
