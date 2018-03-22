function procesar(data){

	var txt = data['txt'];
	var op = data['op'];
	var ext = data['ext'];

	switch(op){
		case "dividir":txt = txt.split(" ");break;
		case "extraer":txt = txt.replace(ext,'');break;
		case "eliminar":txt = txt.replace(/\s/g,'');break;
		case "capitalizar":txt = txt.replace(/\b\w/g, l => l.toUpperCase());break;
		case "minuscula":txt = txt.toLowerCase();break;
		case "mayuscula":txt = txt.toUpperCase();break;
		case "contar":txt = txt.length;break;
	}

	return txt;
}

module.exports.procesar = procesar;			
