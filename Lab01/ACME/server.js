var http = require('http'),
fs = require('fs');

http.createServer(function(request,response){
	console.log(request.url);
	var archivo = "";

	switch(request.url){
		case "/nosotros":
			archivo = "./nosotros.html"; break;
		case "/nuestrosServicios":
			archivo = "./nuestrosServicios.html"; break;
		case "/catalogoClientes":
			archivo = "./catalogoClientes.html"; break;
		case "/contactenos":
			archivo = "./contactenos.html"; break;
		default:
			archivo = "./index.html"; break;
	}

	fs.readFile(String(archivo), function(error, html){
		response.write(html);
		response.end();
	});
}).listen(8080);