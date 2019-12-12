window.onload = function (){
	document.querySelector('#password').value = generate();
	var copyText = document.getElementById("password");
	copyText.select();

	var copyButton = document.getElementById("copy")
	copyButton.onclick = function() {
		/* Select the text field */
		copyText.select();
		/* Copy the text inside the text field */
		document.execCommand("copy");
	}

	var newButton = document.getElementById("new")
	newButton.onclick = function() {
		document.querySelector('#password').value = generate();
	}
}

function generate( length = 15 ){
	var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

    var all = uppercase + lowercase + numbers + symbols;

    var password = '';

    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }

    return password;
}
