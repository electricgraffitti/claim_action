Nucleus.LineFlag = DS.Model.extend({
	flagType: DS.attr('string'),
	autoReview: DS.attr('boolean'),
	clientAutoReview: DS.attr('boolean'),
	dos: DS.attr('string'),
	triggerCode: DS.attr('string'),
	triggerClaim: DS.attr('string'),
	triggerSpec: DS.attr('string'),

	flag: DS.belongsTo('Nucleus.Flag')
});