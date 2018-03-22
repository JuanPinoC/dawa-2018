var navidad = function(){
	
	var fec = new Date();
	var navidad = new Date();
	
	navidad.setFullYear(fec.getUTCFullYear(),12,25);

	dias = Math.round((navidad-fec)/(1000*60*60*24));

	console.log("Hoy: " + fec.toLocaleString() +"\n");
	console.log("Faltan " + dias + " dias para navidad");
};	