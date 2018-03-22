var http = require('http'),
fs = require('fs'),
fec_ini = new Date(),
fec_fin = new Date(),
dias = 0;

http.createServer(function(req,res){

	var arg = req.url.substring(req.url.indexOf('=')+1);

	fec_fin.setFullYear(arg.substring(arg.lastIndexOf('-')+1),
						arg.substring(arg.indexOf('-')+1,arg.lastIndexOf('-'))-1,
						arg.substring(0,arg.indexOf('-')));

	dias = Math.round((fec_fin-fec_ini)/(1000*60*60*24));

	res.write("Hoy: " + fec_ini.toLocaleString() +"\n");
	res.write("Faltan " + dias + " dias para " + fec_fin.toLocaleString());
	
	res.end();
}).listen(8080);