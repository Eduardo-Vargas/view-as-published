chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  if (request.changeIcon) {
    chrome.tabs.query(queryInfo, function(tabs) {
      var tab = tabs[0];

      if (tab.url.includes('editor.html/')) {
        chrome.browserAction.setIcon({
          path: '/images/dev.png',
          tabId: tab.id
        });
      } else {
        chrome.browserAction.setIcon({
          path: '/images/preview.png',
          tabId: tab.id
        });
      }
    });
  }
});
