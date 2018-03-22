var http = require('http'),
fs = require('fs');

http.createServer(function(req,res){

	var url = "";

	switch(req.url){
		case "/inicio": url = "./inicio.html";break;
		case "/galeria": url = "./fotos.html";break;
		default: url = "./default.html";
	}

	fs.readFile(url,function(err,html){
		if(err){
			res.writeHead(200,{'Content-type':'text'});
			res.write("no existe la ruta especificada. \n");
			res.write(url);
		}else{
			res.writeHead(200,{'Content-type':'html'});
			res.write(html);
		}
		res.end();
	});
}).listen(8080);