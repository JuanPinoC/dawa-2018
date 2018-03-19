var dias_mes = function(mes){
	
	if(mes>12 || mes<0){
		return false;
	}

	var primer = "";
	var ultimo = "";
	var fec = new Date();
	fec.setMonth(mes-1);
	fec.setDate(1);
	console.log(fec.toString());
	fec.setFullYear(fec.getFullYear(), mes+1, 0);
	console.log(fec.toString());
	return;
};