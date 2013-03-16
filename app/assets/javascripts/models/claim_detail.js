Nucleus.ClaimDetail = DS.Model.extend({
	title: DS.attr('string'),
	value: DS.attr('boolean'),
	claim: DS.belongsTo('Nucleus.Claim')
});