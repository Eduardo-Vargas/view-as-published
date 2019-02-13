chrome.browserAction.onClicked.addListener(function(tab) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];

    if (tab.url.includes('editor.html/')) {
      var url = tab.url + '?wcmmode=disabled';
      var finalURL = url.replace('editor.html/', '');
      chrome.tabs.update(tab.id, { url: finalURL });
      chrome.browserAction.setIcon({
        path: '/images/preview.png',
        tabId: tab.id
      });
    } else {
      var url = tab.url;
      var temp = url.replace('?wcmmode=disabled', '');
      var finalURL = temp.replace('.com/', '.com/editor.html/');
      chrome.tabs.update(tab.id, { url: finalURL });
      chrome.browserAction.setIcon({ path: '/images/dev.png', tabId: tab.id });
    }
  });
});

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
