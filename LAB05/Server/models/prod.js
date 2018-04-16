var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
	nombre: String,
	descripcion: String,
	precio: String
});

prod_model = mongoose.model('producto',producto_schema,'producto');

function listado(req,res){
	prod_model.find({},function(err,items){
			if(!err){
				//res.send(items);
				console.log(items);
				res.render('table',{data: items});
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
			prod_model.findOne({_id: req.query._id},function(err,items){
				if (!err) {
					//res.send(items);
					res.render('update',{data: items});
				}else{
					return console.log(err);
				}
			});
		}
	},
	create: function(req, res){
		var item = {
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio
		};
		var nuevo = new prod_model(item).save({},function(){
			//res.send(nuevo);
			listado(req,res);
		});
	},
	update: function(req,res){
		prod_model.findOne({_id: req.body._id},function(err,producto){
			producto.nombre = req.body.nombre;
			producto.descripcion = req.body.descripcion;
			producto.precio = req.body.precio;
			producto.save({},function(){
				//res.send(producto);
				listado(req,res);
			});
		});
	},
	delete: function(req,res){
		prod_model.findOne({_id: req.body._id},function(err,producto){
			producto.remove({},function(){
				//res.send({status:true});
				listado(req,res);
			});
		});
	},
};