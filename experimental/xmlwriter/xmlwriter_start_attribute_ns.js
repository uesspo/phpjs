function xmlwriter_start_attribute_ns(xmlwriter, prefix, name, uri) {
  // http://kevin.vanzonneveld.net
  // +   based on: Brett Zamir (http://brett-zamir.me)
  // *     example 1: var xmlwriter = xmlwriter_open_memory();
  // *     example 1: xmlwriter_start_attribute_ns(xmlwriter, 'xlink', 'href', 'http://www.w3.org/1999/xlink');
  // *     returns 1: true

  return xmlwriter.startAttributeNS(prefix, name, uri);
}
