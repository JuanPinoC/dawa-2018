exports.replace = function(objetivo, reemplazos){
	var param_encontrados = objetivo.match(/%(.*?)%/g);
	if(param_encontrados){
		for(var i=0,l=param_encontrados.length; i<l; i++){
			var nombre_param = param_encontrados[i].replace(/%/g, '');
			var valor_reemplazo = reemplazos[nombre_param];

			objetivo = objetivo.replace(param_encontrados[i], valor_reemplazo);
		}
	}
	return objetivo;
};