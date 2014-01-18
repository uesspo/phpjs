function vsprintf(format, args) {
  // From: http://phpjs.org/functions
  // +   based on: ejsanders
  // -    depends on: sprintf
  // *     example 1: vsprintf('%04d-%02d-%02d', [1988, 8, 1]);
  // *     returns 1: '1988-08-01'
  return this.sprintf.apply(this, [format].concat(args));
}
