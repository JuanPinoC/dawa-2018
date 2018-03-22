function parse_vars(req){
	var arreglo_parametros = [],
	parametros = [],
	valores = [];

	if(req.url.indexOf('?')>0){
		var arreglo_parametros = req.url.split('?')[1].split('&');
	}

	for(var i=0; i<arreglo_parametros.length;i++){
		parametros[i] = arreglo_parametros[i].split('=')[0];
		valores[i] = arreglo_parametros[i].split('=')[1];
	}

	return {
		parametros: parametros,
		valores: valores
	};
}

module.exports.parse_vars = parse_vars;
module.exports.batman = {
	identidad: "Bruce Wayne",
	poder: 'Dinero'
};