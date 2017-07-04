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

  $(".troosearch-inputs").gsearch({
    inputdiv: {
      input: '#input',
      inputSuggestion: '#input-suggestion',
      suggestionBox: '#suggestion-box',
      singleSuggestion: '#single-suggestion',
      loadingBox: '#Loading-suggestion'
    },
    autocomplete: 'true',
    keyboardProperty: 'true',
    urlStart: "http://35.154.56.172/api/project-search/Gurgaon/",
    urlEnd: "/Flats",
    keyArray: 'data',
    key: 'name'
  });


  $(".troosearch-inputs1").gsearch({
    inputdiv: {
      input: '#input1',
      inputSuggestion: '#input-suggestion1',
      suggestionBox: '#suggestion-box1',
      singleSuggestion: '#single-suggestion1',
      loadingBox: '#Loading-suggestion1'
    },
    autocomplete: 'true',
    keyboardProperty: 'true',
    urlStart: "http://35.154.56.172/api/project-search/Gurgaon/",
    urlEnd: "/Flats",
    keyArray: 'data',
    key: 'name'
  });
