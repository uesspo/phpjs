function xmlwriter_end_cdata(xmlwriter) {
  // http://kevin.vanzonneveld.net
  // +   based on: Brett Zamir (http://brett-zamir.me)
  // *     example 1: var xmlwriter = xmlwriter_open_memory();
  // *     example 1: xmlwriter_end_cdata(xmlwriter);
  // *     returns 1: true

  return xmlwriter.endCData();
}
