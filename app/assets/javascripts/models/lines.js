Nucleus.Line = DS.Model.extend({
	description: DS.attr('string'),
	units: DS.attr('string'),
	dos: DS.attr('date'),
	
	lineFlags: DS.hasMany('Nucleus.LineFlag'),
	detailView: 'claims/lines/line_detail'
});