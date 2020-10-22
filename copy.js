jQuery(function($) {

  var copyCommandSupported = document.queryCommandSupported('copy');
  $('#featureDetectMsg').text('Copy command supported: ' + copyCommandSupported);
  
  $('#copyButton').click(function() {
    var preElement = $('#examplePre')[0];
    copyToClipboard(preElement, showSuccessMsg);
  });

  function showSuccessMsg() {
    $('#successMsg').finish().fadeIn(30).fadeOut(1000);
  }

  function copyToClipboard(element, successCallback) {
    selectText(element);
    
    var succeed;
    try {
      succeed = document.execCommand('copy');
    } catch (e) {
      succeed = false;
    }

    if (succeed && (typeof successCallback === 'function')) {
      successCallback();
    }
  }

  function selectText(element) {
    if (/INPUT|TEXTAREA/i.test(element.tagName)) {
      element.focus();
      if (element.setSelectionRange) {
        element.setSelectionRange(0, element.value.length);
      } else {
        element.select();
      }
      return;
    }
    
    if (window.getSelection) { // All browsers, except IE <=8
      window.getSelection().selectAllChildren(element);
    } else if (document.body.createTextRange) { // IE <=8
      var range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    }
  }

});