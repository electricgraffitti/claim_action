Nucleus.Router.map(function() {

	this.resource('claims', function() {
		this.resource('claim', {path: ':claim_id'}, function() {
			this.resource('lines', function() {
				this.resource('line', {path: ':line_id'}, function() {
					this.resource('line_flags', function() {
						this.resource('flag', {path: ':flag_id'})
					});
				});
			});
		});
	});
});



