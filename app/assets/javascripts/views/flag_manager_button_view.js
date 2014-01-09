Nucleus.FlagManagerButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('F'),
	classNames: ['icon', 'small_icon', 'flag'],
	tagName: 'button',
	
	click: function(e) {
		this.get('controller').triggerSubSystems('flag_tools'); 
	}

});