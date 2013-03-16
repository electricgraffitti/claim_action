Nucleus.ClaimsRoute = Ember.Route.extend({
  model: function() {
    return Nucleus.Claim.find();
  }
});

Nucleus.ClaimRoute = Ember.Route.extend({
	model: function(params) {
    return Nucleus.Claim.find(params.claim_id);
  }
});