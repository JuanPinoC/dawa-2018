parser = require('./parser_vars.js');

function calcular(req){	
	
	var respuesta = parser.parse_vars(req),
	parametros = respuesta['parametros'],
	valores = respuesta['valores'];

	var n1=0,n2=0,op="",re=0;

	for(var i=0; i<parametros.length; i++){
		n1 = (parametros[i]=="n1")? parseFloat(valores[i]):n1;
		n2 = (parametros[i]=="n2")? parseFloat(valores[i]):n2;
		op = (parametros[i]=="op")? valores[i]:op;
	}

	switch(op){
		case "s": re=n1+n2;break;
		case "r": re=n1-n2;break;
		case "m": re=n1*n2;break;
		default: re=n1/n2;break;
	}

	return re;
}

module.exports.calcular = calcular;