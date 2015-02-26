import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    save: function () {
      this.store.createRecord('user', {
        first_name: this.get('firstName'),
        last_name: this.get('lastName'),
      });
    }

  }

});
