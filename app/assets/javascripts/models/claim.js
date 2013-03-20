Nucleus.Claim = DS.Model.extend({
	claimSeq: DS.attr('string'),
	hasDocuments: DS.attr('boolean'),
	isLocked: DS.attr('boolean'),
	hasFlags: DS.attr('boolean'),
	claimDetail: DS.attr('object'),
	
	// Associations
	clientDetails: DS.hasMany('Nucleus.ClientDetail'),
	dxCodes: DS.hasMany('Nucleus.DxCode'),
	claimLines: DS.hasMany('Nucleus.Line'),

	// Properties 
	metaTitle: "Claim Details",
	seq_number: function() {
    return this.get('claimSeq');
  }.property('claimSeq'),

	secondary: function() {
    return "Claim Sequence" + ' ' + this.get('claimSeq');
  }.property('claimSeq')
	
});