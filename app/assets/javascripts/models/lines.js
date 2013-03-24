Nucleus.Line = DS.Model.extend({
	description: DS.attr('string'),
	units: DS.attr('string'),
	dos: DS.attr('date'),
	pos: DS.attr('string'),
	spec: DS.attr('string'),
	rev: DS.attr('string'),
	proc: DS.attr('string'),
	mod: DS.attr('string'),
	allowed: DS.attr('string'),
	billed: DS.attr('string'),
	adjPaid: DS.attr('string'),
	sugPaid: DS.attr('string'),
	savings: DS.attr('string'),
	lineFlags: DS.hasMany('Nucleus.LineFlag'),
	detailView: 'meta_data/line_meta_data'
});