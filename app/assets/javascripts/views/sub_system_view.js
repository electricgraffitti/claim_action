Nucleus.SubSystemView = Ember.ContainerView.extend({
	classNames: ['view_segment', 'full_box'],

	init: function() {
		this._super();

		this.set('currentView', Ember.View.create({templateName: "sub_systems/" + this.get('controller').get('defaultSubSystemView')}));
	},

  subSystemChildViewChanged: function() {
    this.set('currentView', this.get('controller').get('subSystemChildView'));
  }.observes('controller.subSystemChildView'),

  didInsertElement: function() {
		Layouts.resizeStage();
		FormElements.customSelects();
	}

});