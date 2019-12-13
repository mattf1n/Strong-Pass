window.onload = function (){
  newPass()

	var copyButton = document.getElementById("copy")
	copyButton.onclick = function() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
	}

	var newButton = document.getElementById("new")
	newButton.onclick = function() {
    newPass()
	}
}

function fillForm(password) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {data: password}, function(response) {
      console.log('success');
    });
  });
}

function newPass() {
  var password = generate()
  fillForm(password)
	document.querySelector('#password').value = password;
	var copyText = document.getElementById("password");
	copyText.select();
  document.execCommand("copy");
}
