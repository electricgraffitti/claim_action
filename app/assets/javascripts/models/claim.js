Nucleus.Claim = DS.Model.extend({
	claimSeq: DS.attr('string'),
	hasDocuments: DS.attr('boolean'),
	isLocked: DS.attr('boolean'),

	// Associations
	claimDetail: DS.attr('object'),
	clientDetails: DS.hasMany('Nucleus.ClientDetail', { embedded: true }),
	lines: DS.hasMany('Nucleus.Line'),

	// Properties 
	metaTitle: "Claim Details",
	seq_number: function() {
    return this.get('claimSeq');
  }.property('claimSeq'),

	secondary: function() {
    return "Claim Sequence" + ' ' + this.get('claimSeq');
  }.property('claimSeq')
	
});