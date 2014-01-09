Nucleus.ClaimsRoute = Ember.Route.extend({
  model: function() {
    return Nucleus.Claim.find();
  },

 goToNextClaim: function(claim) {
    this.transitionTo('claim', claim);
  }
});

Nucleus.ClaimRoute = Ember.Route.extend({
	model: function(params) {
    return Nucleus.Claim.find(params.claim_id);
  }
});