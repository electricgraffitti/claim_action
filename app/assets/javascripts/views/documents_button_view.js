Nucleus.DocumentsButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('D'),
	classNames: ['icon', 'small_icon', 'documents'],
	tagName: 'button',
	
	click: function(e) {
		this.get('controller').triggerSubSystems('documents'); 
	}

});