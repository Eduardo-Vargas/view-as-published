chrome.browserAction.onClicked.addListener(function(tab) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url+'?wcmmode=disabled';
    var temp = url.replace('editor.html/', '');
    window.open(temp, '_blank');
  });
});
