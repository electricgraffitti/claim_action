Nucleus.NotesButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('N'),
	classNames: ['icon', 'small_icon', 'notes'],
	tagName: 'button',
	
	click: function(e) {
		this.get('controller').triggerSubSystems('notes'); 
	}

});