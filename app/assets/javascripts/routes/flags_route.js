Nucleus.FlagsRoute = Ember.Route.extend({
  model: function() {
    return Nucleus.Flag.find();
  }
});

Nucleus.FlagRoute = Ember.Route.extend({
	model: function(params) {
    return Nucleus.Flag.find(params.flag_id);
  },
});