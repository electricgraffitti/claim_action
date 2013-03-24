Nucleus.ClaimsController = Ember.ArrayController.extend({
	currentClaim: null,

  prev: function() {
    this.set('currentClaim', this.get('prevClaim'));
  },

  next: function() {
  	var nextClaim = this.get('nextClaim');
    this.set('currentClaim', nextClaim);
    this.transitionToRoute('claim', nextClaim);
  },

  prevClaim: function() {
    var claims = this.get('claims'),
    		currentIndex = claims.indexOf(this.get('currentClaim')),
    		prevIndex = currentIndex === 0 ? claims.length - 1 : currentIndex - 1;

    return claims.objectAt(prevIndex);
  }.property('claims', 'currentClaim'),

  nextClaim: function() {
  	var currentId = this.get('currentClaim').get('id'),
  			lengthCheck = this.objectAt(currentId),
  			nextClaim = typeof lengthCheck === "undefined" ? this.objectAt(0) : this.nextObject(currentId, this.get('currentClaim'));

    return nextClaim;
  }.property('claims', 'currentClaim')

});

Nucleus.ClaimController = Ember.ObjectController.extend({
	needs: ['claims', 'subSystems'],
  subSystemChildView: null,
  metaDataChildView: null,
  metaDataObject: null,
  defaultMetaDataView: 'meta_data/claim_meta_data',
  defaultSubSystemView: 'documents',

  init: function() {
    this.setDefaultSubSystemView();
    this.setDefaultMetaDataView();
  },

  setDefaultSubSystemView: function () {
    var subSystemsController = this.get("controllers.subSystems"),
        subSystemView = subSystemsController.findProperty('name', this.get('defaultSubSystemView'));

    this.set('subSystemChildView', subSystemView.get('subSystemView'));
  },

  setDefaultMetaDataView: function () {
    this.set('metaDataChildView', Ember.View.create({templateName: this.get('defaultMetaDataView')}));
    this.set('metaDataObject', this.get('content'));
  },

	triggerNextClaim: function() {
		var claimsController = this.get("controllers.claims");
		claimsController.set('currentClaim', this);
		claimsController.next();
	},

  triggerSubSystems: function (subSystem) {
    var view = Ember.View.create({templateName: "sub_systems/" + subSystem});
    this.set('subSystemChildView', view);
  },

  loadMetaDetails: function(detailViewObject) {
    this.set('metaDataChildView', Ember.View.create({templateName: detailViewObject.get('detailView')}));
    this.set('metaDataObject', detailViewObject);
  },

});

Nucleus.ClaimDetailsController = Ember.ArrayController.extend();

Nucleus.LinesController = Ember.ArrayController.extend({
  needs: "claim",
  postBinding: "controllers.claim"
});

Nucleus.FlagsController = Ember.ArrayController.extend({
  needs: "line",
  postBinding: "controllers.line"
});