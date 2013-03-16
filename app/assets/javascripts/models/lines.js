Nucleus.Line = DS.Model.extend({
	description: DS.attr('string'),
	units: DS.attr('string'),
	dos: DS.attr('date'),
	
	line: DS.belongsTo('Nucleus.Claim'),
	flags: DS.hasMany('Nucleus.Flags'),

	metaTitle: "Claim Lines"
});