Nucleus.TransferClaimButtonView = Ember.View.extend({
	template: Ember.Handlebars.compile('T'),
	classNames: ['icon', 'small_icon', 'transfer'],
	tagName: 'button',
	
	click: function(e) {
		this.get('controller').triggerSubSystems('transfer_claim'); 
	}

});