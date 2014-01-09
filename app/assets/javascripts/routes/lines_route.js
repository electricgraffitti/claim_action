Nucleus.LinesRoute = Ember.Route.extend({
  model: function() {
    return Nucleus.Line.find();
  }
});

Nucleus.LineRoute = Ember.Route.extend({
	model: function(params) {
    return Nucleus.Line.find(params.line_id);
  }
});