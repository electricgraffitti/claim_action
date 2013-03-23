Nucleus.SubSystemController = Ember.Object.extend({
  subSystemChildView: null
});

var subSystems = [
  Nucleus.SubSystem.create({ name: 'logics' }),
  Nucleus.SubSystem.create({ name: 'notes' }),
  Nucleus.SubSystem.create({ name: 'documents' }),
  Nucleus.SubSystem.create({ name: 'transfer_claim' }),
  Nucleus.SubSystem.create({ name: 'add_appeal' }),
  Nucleus.SubSystem.create({ name: 'patient_claim_history' }),
  Nucleus.SubSystem.create({ name: 'flag_tools' })
];

subSystems.forEach(function(subSystem) {
  subSystem.set('subSystemView', Ember.View.create({
    templateName: "sub_systems/" + subSystem.get('name'),
    name: subSystem.get('name')
  }));
});


Nucleus.SubSystemsController = Ember.ArrayController.extend({
	content: subSystems
});