var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/baches');

var categoria_schema = new Schema({
	_id: Number,
	nombre: String,
	subcategorias: Array
});

cat_model = mongoose.model('categorias',categoria_schema,'categorias');

function listado(req,res){
	cat_model.find({},function(err,items){
			if(!err){
				//res.send(items);
				console.log(items);
				res.render('categoria_table',{data: items});
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
			cat_model.findOne({_id: req.query._id},function(err,items){
				if (!err) {
					//res.send(items);
					res.render('categoria_update',{data: items});
				}else{
					return console.log(err);
				}
			});
		}
	},
	create: function(req, res){
		cat_model.find({},null,{sort:{_id:-1}},function(err,categorias){
			
			var arr_subcats = [];
			var n = 1;
			while(typeof req.body['subcat'+n] != 'undefined'){
				arr_subcats.push(
					{	_id: n,
						nombre: req.body['subcat'+n]
					}
				);
				n++;
			}
	
			var item = {
				_id: categorias[0]._id + 1,
				nombre: req.body.nombre,
				subcategorias: arr_subcats
			};

			var nuevo = new cat_model(item).save({},function(){
				//res.send(nuevo);
				listado(req,res);
			});
		});
	},
	update: function(req,res){
		cat_model.findOne({_id: req.body._id},function(err,categoria){

			var arr_subcats = [];
			var n = 1;
			while(typeof req.body['subcat'+n] != 'undefined'){
				arr_subcats.push(
					{	_id: n,
						nombre: req.body['subcat'+n]
					}
				);
				n++;
			}

			categoria.nombre = req.body.nombre;
			categoria.subcategorias = arr_subcats;

			categoria.save({},function(){
				//res.send(producto);
				listado(req,res);
			});
		});
	},
	delete: function(req,res){
		cat_model.findOne({_id: req.body._id},function(err,categoria){
			categoria.remove({},function(){
				//res.send({status:true});
				listado(req,res);
			});
		});
	},
};
