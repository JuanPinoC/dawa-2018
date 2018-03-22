var http = require('http'),
fs = require('fs'),
calculadora = require('./calculadora.js');
procesador = require('./procesador.js'),
qs = require('querystring');

http.createServer(function(req,res){
	var url = "";

	switch(req.url.split('?')[0]){
		case "/calculadora": url = "./calculadora.html";break;
		case "/procesador": url = "./procesador.html";break;
		default: url = "./index.html";
	}

	fs.readFile(url,function(err,html){
			var html_string = html.toString(),
			body = "", respuesta = "";

			req.on('data', function(chunk){	
				body += chunk;
			});

			req.on('end',function(){
				var data = qs.parse(body);
				data = JSON.stringify(data);
				data = JSON.parse(data);

				if(url=="./calculadora.html" && req.url.indexOf("?")>0){
					respuesta = calculadora.calcular(req);
				}

				if(url=="./procesador.html" && req.method=='POST'){		
					respuesta = procesador.procesar(data);
				}
				
				html_string = html_string.replace('{valor}',respuesta);
				
				res.writeHead(200,{'Content-type':'text'});
				res.write(html_string);
				res.end();
			});
	});
}).listen(8080);