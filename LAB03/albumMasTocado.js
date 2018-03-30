(function() {
var Album = function(autor, nombre){
	tocado = 0;
	return{
		autor: autor,
		nombre: nombre,
		tocado: this.tocado,
		"play":function(){
			this.tocado ++;
			console.log("Tocando " + autor + " - " + nombre);
		},
	}
};

var MusicBox = function(){
	var albums = [];
	return{
		"addAlbum":function(album){
			albums.push(album);
		},
		"favoriteAlbum":function(){
			return albums[album_favorito(albums).index].nombre;
		}
	};
};

var album_favorito = function ( coleccion ) {
	if ( coleccion.length === 0 ) return;

	var mas_reproducido = coleccion[0].tocado,
	mas_indice = 0;
	
	for(var i=0; i < coleccion.length; i++){
		if(coleccion[i].tocado > mas_reproducido){
			mas_reproducido = coleccion[i].tocado;
			mas_indice = i;
		}
	}
	return { play: mas_reproducido, index: mas_indice};
};


var box = MusicBox(),
a1 = Album("The Who","Tommy"),
a2 = Album("Tom Waits","Closing Time"),
a3 = Album("John Cale","Paris 1919"),
favorito;

box.addAlbum(a1);
box.addAlbum(a2);
box.addAlbum(a3);

a1.play();
a2.play();
a2.play();
a3.play();

favorito = box.favoriteAlbum();

console.log("tu album favorito es " + favorito);
}());