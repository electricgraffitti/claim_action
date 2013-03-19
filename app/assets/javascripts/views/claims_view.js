Nucleus.ClaimsView = Ember.View.extend({
  templateName: 'claims/claims',
  didInsertElement: function() {
		Layouts.resizeStage();
		FormElements.customSelects();
	}
});