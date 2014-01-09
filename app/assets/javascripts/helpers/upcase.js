Ember.Handlebars.registerBoundHelper('upcase', function(value) {
	escaped = Handlebars.Utils.escapeExpression(value);
  return escaped.toUpperCase();
});