Nucleus.MetaDataView = Ember.ContainerView.extend({
	classNames: ['full_box'],

	init: function() {
		this._super();
		this.set('currentView', Ember.View.create({templateName: this.get('controller').get('defaultMetaDataView')}));
	},

  metaDataChildViewChanged: function() {
  	var currentController = this.get('controller');
    this.set('currentView', currentController.get('metaDataChildView'));
  }.observes('controller.metaDataChildView'),

  didInsertElement: function() {
		Layouts.resizeStage();
		FormElements.customSelects();
	}
});