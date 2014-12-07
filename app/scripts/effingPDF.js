-function() {

  var root = this;

  var eff = function(obj) {
    // Either serve as the identity function on `eff` instances,
    // ... or instantiate a new `eff` object for other input.

    // If an `eff` instance was passed, return it.
    if (obj instanceof eff) return obj;

    // If someone called `eff(...)`, rather than `new eff(...)`,
    // ... return `new eff(...)` to instantiate an instance.
    if (!(this instanceof eff)) return new eff(obj);

    // If we are instantiating a new `eff` object with an underlying,
    // ... object, set that object to the `wrapped` property.
    this.wrapped = obj;
  };


  // Support for Asynchoronous Module Definition
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = eff;
    }
    exports.eff = eff;
  } else {
    // If its a browser then put the eff in the window object
    root.eff = eff;
  }

  eff.VERSION = '0.0.1';

}(this)
