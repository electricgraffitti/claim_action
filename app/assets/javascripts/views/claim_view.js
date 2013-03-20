Nucleus.ClaimView = Ember.View.extend({
  templateName: 'claims/claim',

  didInsertElement: function() {
		Layouts.resizeStage();
		FormElements.customSelects();
	}
});