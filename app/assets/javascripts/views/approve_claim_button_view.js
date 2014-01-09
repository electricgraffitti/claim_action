Nucleus.ApproveClaimButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('Approve'),
	classNames: ['button', 'red_button'],
	tagName: 'button',

	click: function() {
		this.get('controller').triggerNextClaim(); 
	}

});	