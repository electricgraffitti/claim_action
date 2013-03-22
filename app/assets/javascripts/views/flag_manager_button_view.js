Nucleus.FlagManagerButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('F'),
	classNames: ['button'],
	tagName: 'button',
	
	click: function(e) {
		alert('flag manager');
	}

});