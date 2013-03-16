Nucleus.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

// DS.FixtureAdapter.map('Nucleus.Claim', {
//   clientDetails: { embedded: 'always' }
// });