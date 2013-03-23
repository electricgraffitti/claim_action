Nucleus.SubSystemView = Ember.ContainerView.extend({
	classNames: ['view_segment', 'full_box'], 
	
  subSystemChildViewChanged: function() {
  	var subSystem = this.get('subSystem'),
      	view = subSystem.get('subSystemView');
    
    if (Ember.none(subSystem)) return;
      
    this.get('childViews').popObject();
    this.get('childViews').pushObject(view);
  }.observes('subSystemChildView')
});