chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    var data = request.data;
    autofill(data);
    sendResponse({data: data, success: true});
});

function autofill(data) {
  var inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'password') {
      inputs[i].value = data;
    }
  }
}
