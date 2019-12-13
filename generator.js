function generate2( length = 15 ){
	var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!#$%&()*+,-./:;<=>?@^[]^_`{|}~';

  var all = uppercase + lowercase + numbers + symbols;

  var password = '';

  for (var index = 0; index < length; index++) {
      var character = Math.floor(Math.random() * all.length);
      password += all.substring(character, character + 1);
  }

  return password;
}

function generate(max = 15, min = 12)
{
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/$:;?";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) {
			return x[Math.floor(Math.random() * x.length)]
		}).join('');
    return randPassword;
}
