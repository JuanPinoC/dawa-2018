var http = require('http'),
fs = require('fs'),
parser = require('./parser_vars.js'),
fec = new Date();

http.createServer(function(req,res){
		res.writeHead(200,{'Content-type':'text'});
		res.write("getTime-> " + fec.getTime().toString());
		res.write("\n");
		res.write("toDateString-> " + fec.toDateString());
		res.write("\n");
		res.write("toLocalString-> " + fec.toLocaleString());
		res.write("\n");
		res.write("toString-> " + fec.toString());
		res.write("\n");
		res.write("toTimeString-> " + fec.toTimeString());
		res.write("\n");
		res.write("toUTCString-> " + fec.toUTCString());
		res.end();
}).listen(8080);