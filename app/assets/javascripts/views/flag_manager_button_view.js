Nucleus.FlagManagerButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('F'),
	classNames: ['button'],
	tagName: 'button',
	
	click: function(e) {
		alert('A section to filter flags/hide flags for this section was inserted.');
	}

});