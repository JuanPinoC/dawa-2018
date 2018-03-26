var param_replacer = require('pino-caceres-tecsup');

var objetivo = "%hello% %world%! -- %world% %hello%!";

var reemplazos = {
	"en": {
		"hello": "Hello",
		"world": "World"
	},
	"es": {
		"hello": "Hola",
		"world": "Mundo"
	},
	"fr": {
		"hello": "Bonjour",
		"world": "Le Monde"	
	}
};

var espanol = param_replacer.replace(objetivo, reemplazos["es"]);
var frances = param_replacer.replace(objetivo, reemplazos["fr"]);

console.log(espanol);
console.log(frances);