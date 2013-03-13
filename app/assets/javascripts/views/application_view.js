Nucleus.ApplicationView = Ember.View.extend({
	didInsertElement: function() {
		Layouts.resizeStage();
		FormElements.customSelects();
	}
});
