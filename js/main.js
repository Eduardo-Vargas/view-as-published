jQuery.noConflict();
(function($) {
  $(function() {
    chrome.tabs.getSelected(null, function(tab) {
      if (tab.url.includes('www.ncr.com')) {
        
        var error = document.getElementById('error');
        var viewAs = document.getElementById('viewAs_button');
        var published = document.getElementById('published_button');
        var dev = document.getElementById('dev_button');
    
        error.style.display = 'block';
        viewAs.style.display = 'none';
        published.style.display = 'none';
        dev.style.display = 'none';
      }
    });
    
    $('#viewAs_button').click(function(e) {
      chrome.tabs.getSelected(null, function(tab) {
        if (tab.url.includes('editor.html/')) {
          var url = tab.url + '?wcmmode=disabled';
          var finalURL = url.replace('editor.html/', '');
          window.open(finalURL, '_blank');
        }
      });
    });
    
    //  ---------------------------------------
    $('#published_button').click(function(e) {
      chrome.tabs.getSelected(null, function(tab) {
          
          var url = tab.url.split("/sites.html");
          var finalURL = "https://www.ncr.com" + url[1];
          window.open(finalURL, '_blank');
      });
    });
    
    //  ---------------------------------------
    $('#dev_button').click(function(e) {
      chrome.tabs.getSelected(null, function(tab) {
          var url = tab.url;
          var temp = url.replace('?wcmmode=disabled', '');
          var finalURL = temp.replace('.com/', '.com/editor.html/');
          window.open(finalURL, '_blank');
      });
    });
    
    
  });
})(jQuery);
