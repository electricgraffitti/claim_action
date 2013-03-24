Nucleus.DetailView = Ember.View.extend({
	template: Ember.Handlebars.compile('View Details'),
	classNames: ['icon', 'small_icon', 'details'],
	tagName: 'button',
	
	click: function(e) {
		alert(this.get('content'));
	}

});