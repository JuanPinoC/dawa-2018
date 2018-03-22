var dias_mes = function(mes){
	
	if(mes>12 || mes<0){
		return false;
	}
	
	var fec = new Date();
	var fec_ini = new Date();
	var fec_fin = new Date();
	fec_ini.setFullYear(fec.getUTCFullYear(),mes-1,1);
	fec_fin.setFullYear(fec.getUTCFullYear(),mes,0);
	console.log(fec_ini.toUTCString().substring(0,3));
	console.log(fec_fin.toUTCString().substring(0,3));
};