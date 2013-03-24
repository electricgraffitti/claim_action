Nucleus.LineFlag = DS.Model.extend({
	flagType: DS.attr('string'),
	autoReview: DS.attr('boolean'),
	clientAutoReview: DS.attr('boolean'),
	dos: DS.attr('string'),
	triggerCode: DS.attr('string'),
	triggerClaim: DS.attr('string'),
	source: DS.attr('string'),
	trigMod: DS.attr('string'),
	trigLine: DS.attr('string'),
	trigProvider: DS.attr('string'),
	trigDx: DS.attr('string'),
	trigAdj: DS.attr('string'),

	flag: DS.belongsTo('Nucleus.Flag'),
	detailView: 'meta_data/flag_meta_data'
});