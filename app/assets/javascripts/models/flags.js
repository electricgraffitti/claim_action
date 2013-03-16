Nucleus.Flag = DS.Model.extend({
	description: DS.attr('string'),
	units: DS.attr('string'),
	dos: DS.attr('date'),
	
	flags: DS.belongsTo('Nucleus.Line'),

	metaTitle: "Claim Lines"
});