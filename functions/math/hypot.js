function hypot(x, y) {
  // From: http://phpjs.org/functions
  // +   based on: Onno Marsman
  // *     example 1: hypot(3, 4);
  // *     returns 1: 5
  // *     example 2: hypot([], 'a');
  // *     returns 2: 0
  return Math.sqrt(x * x + y * y) || 0;
}
