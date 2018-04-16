var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/baches');

var usuario_schema = new Schema({
	_id: Number, 
    nombres: String,
    apellidos: String,
    telefono:  Number,
    celular: Number,
    ciudad: String,
    contrasenia: String,
    direccion: String,
    email: String,
    tarjeta: Array
});

usu_model = mongoose.model('usuarios',usuario_schema,'usuarios');

function listado(req, res){
	usu_model.find({},function(err,items){
		if(!err){
			//res.send(items);
			console.log();
			res.render('usuario_table',{data: items});
		}else{
			return console.log(err);
		}
	});	
}

module.exports = {
	show: function(req, res){
		if(req.query._id==null){
			listado(req,res);
		}else{
			usu_model.findOne({_id: req.query._id},function(err,items){
				if (!err) {
					//res.send(items);
					res.render('usuario_update',{data: items});
				}else{
					return console.log(err);
				}
			});
		}
	},
	create: function(req, res){
		usu_model.find({},null,{sort:{_id:-1}},function(err,usuarios){

			var arr_tarjetas = [];
				var n = 1;
				while(typeof req.body['t_num'+n] != 'undefined'){
					arr_tarjetas.push(
						{
							_id: n,
							nro: req.body['t_num'+n],
							fec_exp: req.body['t_fec_exp'+n],
							cod_seg: req.body['t_cod_seg'+n],
							clave: req.body['t_clave'+n]
						}
					);
					n++;
			}

			var item = {
				_id: usuarios[0]._id + 1,
			    nombres: req.body.nombres,
			    apellidos: req.body.apellidos,
			    telefono:  req.body.telefono,
			    celular: req.body.celular,
			    ciudad: req.body.ciudad,
			    contrasenia: req.body.contrasenia,
			    direccion: req.body.direccion,
			    email: req.body.email,
			    tarjeta: arr_tarjetas
			};

			console.log(item);
			var nuevo = new usu_model(item).save({},function(){
				//res.send(nuevo);
				listado(req,res);
			});
		});
	},
	update: function(req,res){
		usu_model.findOne({_id: req.body._id},function(err,usuario){

			var arr_tarjetas = [];
				var n = 1;
				while(typeof req.body['t_num'+n] != 'undefined'){
					arr_tarjetas.push(
						{
							_id: n,
							nro: req.body['t_num'+n],
							fec_exp: req.body['t_fec_exp'+n],
							cod_seg: req.body['t_cod_seg'+n],
							clave: req.body['t_clave'+n]
						}
					);
					n++;
			}

		    usuario.nombres = req.body.nombres,
		    usuario.apellidos = req.body.apellidos,
		    usuario.telefono = req.body.telefono,
		    usuario.celular = req.body.celular,
		    usuario.ciudad = req.body.ciudad,
		    usuario.contrasenia = req.body.contrasenia,
		    usuario.direccion = req.body.direccion,
		    usuario.email = req.body.email,
		    usuario.tarjeta = arr_tarjetas

			usuario.save({},function(){
				//res.send(producto);
				listado(req,res);
			});
		});
	},
	delete: function(req,res){
		usu_model.findOne({_id: req.body._id},function(err,usuario){
			usuario.remove({},function(){
				//res.send({status:true});
				listado(req,res);
			});
		});
	},
};
