Nucleus.ClaimLogicsButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('L'),
	classNames: ['button'],
	tagName: 'button',
	
	click: function(e) {
		alert('logics manager');
	}

});