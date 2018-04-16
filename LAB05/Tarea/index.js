var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
categoria = require('./models/categoria'),
usuario = require('./models/usuario'),
plan = require('./models/plan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.set('view engine','jade');

app.get('/',function(req,res){
	res.render('inicio');
});

//categorias
app.get('/categoria/create',function(req,res){
	res.render('categoria_create');
});
app.get('/categoria',categoria.show);
app.post('/categoria',categoria.create);
app.post('/categoria/update', categoria.update);
app.post('/categoria/delete', categoria.delete);

//usuarios
app.get('/usuario/create',function(req,res){
	res.render('usuario_create');
});
app.get('/usuario',usuario.show);
app.post('/usuario',usuario.create);
app.post('/usuario/update', usuario.update);
app.post('/usuario/delete', usuario.delete);

//planes
app.get('/plan/create',function(req,res){
	res.render('plan_create');
});
app.get('/plan',plan.show);
app.post('/plan',plan.create);
app.post('/plan/update', plan.update);
app.post('/plan/delete', plan.delete);

app.listen(9090,function(){
	console.log("Iniciando!")
});