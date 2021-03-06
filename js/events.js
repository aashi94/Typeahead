var Events = function(ui, domElement) {
  this.ui = ui;
  //this.keyboard=keyboardProperty;
  // this.api = api;
  this.urls = domElement.urlStart;
  this.urle = domElement.urlEnd;
  this.key = domElement.key;
  // console.log("url start:" + this.urls);
  // console.log("url end:" + this.urle);
  this.timeout = null;

  this.keyArray = domElement.keyArray;
}

Events.prototype = {
  constructor: Events,

  keydownfn: function(e, _this) {
    clearTimeout(_this.timeout);
    _this.timeout = setTimeout(function() {
      var keyword = _this.ui.searchBox.val();
      console.log("keyword:" + keyword);
      console.log("keyCode:" + e.keyCode);

      if (keyword == "") {
        _this.ui.display(_this.ui.suggestionBox, 'none');
        _this.ui.display(_this.ui.singleBox, 'none');
        _this.ui.display(_this.ui.loadingBox, 'none');
        _this.ui.clear();
      } else {
        _this.ui.clear();
        _this.ui.display(_this.ui.suggestionBox, 'inline-block');
        _this.ui.display(_this.ui.singleBox, 'block');
        _this.ui.display(_this.ui.loadingBox, 'block');

        setTimeout(function() {
          var xmlhttp = new XMLHttpRequest();
          if (_this.urle != "false")
            var url = _this.urls + keyword + _this.urle;
          else {
            var url = _this.urls + keyword;
          }
          //  console.log("url:"+url);
          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var myArr = JSON.parse(this.responseText);
              _this.ui.display(_this.ui.loadingBox, 'none');
              // console.log("myArr.data"+myArr);

              var traversed = _this.traversing(myArr,_this.keyArray);

              _this.ui.displaySearchResult(traversed, keyword);
            }
          };
          xmlhttp.open("GET", url, true);
          xmlhttp.send();
        }, 0);
      }
    }, 500);
  },

  capture: function() {
    var _this = this;
    // console.log("keyboard val:"+this.keyboard);
    _this.ui.searchBox.on('keydown', function(e) {

      if ((e.keyCode == 40 || e.keyCode == 38)) {
        // if(this.keyboard=="true")
        e.preventDefault();

        _this.ui.autocompleteOnDownArrow(e);
      } else if ((e.keyCode == 39) || (e.keyCode == 13)) {
        // if(this.keyboard=="true")
        _this.ui.autocompleteOnRightArrow();
      } else
        _this.keydownfn(e, _this);
    });

    this.ui.suggestionBox.on('click', function(e) {
      _this.ui.autocompleteOnClick(e, 'suggestion');
    });

  },

  traversing: function(mainObject , keyArr){
    var tempObj= JSON.parse(JSON.stringify(mainObject));  //hollow copy
    keyArr.forEach(function(val){
      tempObj=tempObj[val];
    });
    console.log("array"+tempObj);
    return tempObj;
  }
}
