Nucleus.Presence = Ember.Mixin.create({

  /**
    Returns whether a property is blank. It considers empty arrays, string, objects, undefined and null
    to be blank, otherwise true.

    @method blank
    @param {String} name the name of the property we want to check
    @return {Boolean}
  */
  blank: function(name) {
    var prop;
    prop = this[name] || this.get(name);
    if (!prop) return true;

    switch (typeof prop) {
      case "string":
        return prop.trim().isBlank();
      case "object":
        return Object.isEmpty(prop);
    }
    return false;
  },

  /**
    Returns whether a property is present. A present property is the opposite of a `blank` one.

    @method present
    @param {String} name the name of the property we want to check
    @return {Boolean}
  */
  present: function(name) {
    return !this.blank(name);
  }
});