Nucleus.ClaimDetail = DS.Model.extend({
	specialty: DS.attr('string'),
	provider: DS.attr('boolean'),
	group: DS.attr('boolean'),
	patient: DS.attr('string'),
	gender: DS.attr('string'),
	claim: DS.belongsTo('Nucleus.Claim')
});