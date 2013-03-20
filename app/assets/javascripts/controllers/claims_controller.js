Nucleus.ClaimsController = Ember.ArrayController.extend();

Nucleus.ClaimController = Ember.ObjectController.extend({


  init: function() {
  	this._super();
    this.initToolBarButtons();
  },

  initToolBarButtons: function () {
  	var containerView = Nucleus.ViewButtonView;

        containerView.pushObject(Nucleus.FlagManagerButtonView.create());
  }

});

Nucleus.ClaimDetailsController = Ember.ArrayController.extend();

Nucleus.LinesController = Ember.ArrayController.extend({
  needs: "claim",
  claimBinding: "controllers.claim"
});

Nucleus.FlagsController = Ember.ArrayController.extend({
  needs: "line",
  lineBinding: "controllers.line"
});