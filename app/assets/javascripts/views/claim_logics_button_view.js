Nucleus.ClaimLogicsButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('L'),
	classNames: ['icon', 'small_icon', 'logics'],
	tagName: 'button',
	
	click: function(e) {
		this.get('controller').triggerSubSystems('logics'); 
	}

});