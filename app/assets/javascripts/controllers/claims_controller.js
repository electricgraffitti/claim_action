Nucleus.ClaimsController = Ember.ArrayController.extend();

Nucleus.ClaimController = Ember.ObjectController.extend();

Nucleus.ClaimDetailsController = Ember.ArrayController.extend();

Nucleus.LinesController = Ember.ArrayController.extend({
  needs: "claim",
  postBinding: "controllers.claim"
});

Nucleus.FlagsController = Ember.ArrayController.extend({
  needs: "line",
  postBinding: "controllers.line"
});