Nucleus.ClaimLogicsButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('L'),
	classNames: ['button'],
	tagName: 'button',
	
	click: function(e) {
		alert('We just made an AJAX call for this Claims Logics');
	}

});