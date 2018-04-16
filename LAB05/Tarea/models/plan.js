var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/baches');

var plan_schema = new Schema({
	_id: Number,
	porcentaje: Number,
	tiempo: Number,
	precio: Number
});

plan_model = mongoose.model('planes',plan_schema,'planes');

function listado(req,res){
	plan_model.find({},function(err,items){
			if(!err){
				//res.send(items);
				console.log(items);
				res.render('plan_table',{data: items});
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
			plan_model.findOne({_id: req.query._id},function(err,items){
				if (!err) {
					//res.send(items);
					res.render('plan_update',{data: items});
				}else{
					return console.log(err);
				}
			});
		}
	},
	create: function(req, res){
		plan_model.find({},null,{sort:{_id:-1}},function(err,planes){
	
			var item = {
				_id: planes[0]._id + 1,
				porcentaje: req.body.porcentaje,
				tiempo: req.body.tiempo,
				precio: req.body.precio
			};

			var nuevo = new plan_model(item).save({},function(){
				//res.send(nuevo);
				listado(req,res);
			});
		});
	},
	update: function(req,res){
		plan_model.findOne({_id: req.body._id},function(err,plan){

			plan.porcentaje = req.body.porcentaje;
			plan.tiempo = req.body.tiempo;
			plan.precio = req.body.precio;

			plan.save({},function(){
				//res.send(producto);
				listado(req,res);
			});
		});
	},
	delete: function(req,res){
		plan_model.findOne({_id: req.body._id},function(err,plan){
			plan.remove({},function(){
				//res.send({status:true});
				listado(req,res);
			});
		});
	},
};
