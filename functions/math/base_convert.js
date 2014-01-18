function base_convert(number, frombase, tobase) {
  // From: http://phpjs.org/functions
  // +   based on: Philippe Baumann
  // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
  // *     example 1: base_convert('A37334', 16, 2);
  // *     returns 1: '101000110111001100110100'
  return parseInt(number + '', frombase | 0).toString(tobase | 0);
}
