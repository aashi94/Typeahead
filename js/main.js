$.fn.gsearch = function(domElement) {
  // console.log("autocomplete:"+domElement.autocomplete);
  // console.log("keyboardProperty:"+domElement.keyboardProperty);
  // console.log("url start:"+domElement.urlStart);
  // console.log("url end:"+domElement.urlEnd);
  // console.log("class:"+domElement.inputdiv);

  var ui = new UI(domElement);
  var events = new Events(ui, domElement);
  events.capture();
};
