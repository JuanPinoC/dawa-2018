conn = new Mongo();
db = conn.getDB("baches");

db.usuarios.insert([
   { _id:       1, 
     nombres:   'Juan Jose',
     apellidos: 'Salas Contreras',
     telefono:  345423,
     celular:   956627263,
     ciudad:    'Arequipa',
     contrasenia:'SalasC',
     direccion: 'Av. EE.UU. E-23',
     email:     'jSalas@hotmail.com',
     tarjeta:[{
      nro:6234243445612345,
      fec_exp: '2020-02-20',
      cod_seg: '345',
      clave: '5644'
      },],
   },
    { _id:       2, 
     nombres:   'Hernan Luis',
     apellidos: 'Gomez Gutierres',
     telefono:  334576,
     celular:   963548798,
     ciudad:    'Arequipa',
     contrasenia:'HLuis',
     direccion: 'Pedro Diez Canseco A-9',
     email:     'hgomez@hotmail.com',
      tarjeta:[{
      nro:1434456444412345,
      fec_exp: '2020-02-20',
      cod_seg: '345',
      clave: '5644'
      },], 
   },
    { _id:       3, 
     nombres:   'Pedro Saul',
     apellidos: 'Vargaz Torres',
     telefono:  457848,
     celular:   978956485,
     ciudad:    'Arequipa',
     contrasenia:'PedroS',
     direccion: 'Calle los Cedros B-2',
     email:     'pvargaz@hotmail.com',
      tarjeta:[{
      nro:1111243445612345,
      fec_exp: '2020-02-20',
      cod_seg: '345',
      clave: '5644'
      },], 
   },
    { _id:       4, 
     nombres:   'Cesar Jhair',
     apellidos: 'Quispe Mamani',
     telefono:  524869,
     celular:   915487569,
     ciudad:    'Arequipa',
     contrasenia:'CesarJ',
     direccion: 'Av. Aviacion J-16',
     email:     'cquispe@hotmail.com',
      tarjeta:[{
      nro:6299993445612345,
      fec_exp: '2020-02-20',
      cod_seg: '345',
      clave: '5644'
      },], 
   },
    { _id:       5, 
     nombres:   'Julio Esteban',
     apellidos: 'Cisneros Cuevas',
     telefono:  124578,
     celular:   915648596,
     ciudad:    'Arequipa',
     contrasenia:'JulioE',
     direccion: 'Calle Brasil P-19',
     email:     'jcisneros@hotmail.com',
      tarjeta:[{
      nro:7846659847365452,
      fec_exp: '2020-02-20',
      cod_seg: '345',
      clave: '5644'
      },], 
   }
    
 ] );

db.categorias.insert([
   {_id:        1,
    nombre:     'Vehiculo',
    scategorias:[{_id: 1,
                 nombre:'Autos',
                 anuncios:[{_id:1,
                            _id_usu:1,
                            titulo:'Vendo Auto a precio rasonable',
                            descripcion:'Estoy en busqueda de alguna persona que desee comprar mi auto el cual se encuentra en gran estado si te interesa llamame y te doy detalles',
                            fec_publicacion:'2017-01-02',
                            estado:'Disponible',
                            precio:8000,
                            marca:'Nissan',
                            kilometraje:123456,
                            transmision:'Automatica',
                            comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"es una ganga!",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"me interesa",
                                        }],
                            }]
                 },
                  {_id:2,
                  nombre:'Motos',
                  anuncios:[{_id:1,
                             _id_usu:2,
                             titulo:'Vendo Moto a buen precio',
                             descripcion:'Si te gustan mi moto puedes contactarme y te dare los detalles que desees',
                             fec_publicacion:'2017-02-03',
                             estado:'Disponible',
                             precio:3000,
                             marca:'Honda',
                             kilometraje:102303,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"es una muy cara!",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"no estoy seguro :S",
                                        }],
                            }]
                  },
                  {_id:3,
                  nombre:'Camiones',
                  anuncios:[{_id:1,
                             _id_usu:3,
                             titulo:'Vendo Camion en buen estado',
                             descripcion:'Si te interesa puedes llamarme y podria rebajarte el precio del anuncio',
                             fec_publicacion:'2017-02-07',
                             estado:'Disponible',
                             precio:30000,
                             marca:'Volvo',
                             kilometraje:093202,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"es una muy cara!",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"no estoy seguro :S",
                                        }],
                           }]
                  }
                  ]
   },
   {_id:        2,
    nombre:     'Inmuebles',
    scategorias:[{_id: 1,
                 nombre:'Departamentos',
                 anuncios:[{_id:1,
                            _id_usu:4,
                            titulo:'Vendo Departamento a precio rasonable',
                            descripcion:'Si deseas adquirir este hermoso departamento comunicate conmigo',
                            fec_publicacion:'2017-01-10',
                            estado:'Disponible',
                            precio:20000,
                            metros_cuadrados:90,
                            ubicacion:'Av. Aviacion',
                            comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"se ve grande!",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"es muy moderno :)",
                                        }],
                            }]
                 },
                  {_id:2,
                  nombre:'Casas',
                  anuncios:[{_id:1,
                             _id_usu:5,
                             titulo:'Vendo Casa',
                             descripcion:'Vendo casa muy hermosa y muy bien ubicada',
                             fec_publicacion:'2017-02-20',
                             estado:'Disponible',
                             precio:45000,
                             metros_cuadrados:120,
                             pisos:2,
                             ubicacion:'Calle Peru E-5',
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"parece una buena opcion!",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"tal vez lo compre :o",
                                        }],
                          }]
                  },
                  {_id:3,
                  nombre:'Terrenos',
                  anuncios:[{_id:1,
                             _id_usu:1,
                             titulo:'Vendo terreno en buena zona',
                             descripcion:'Si necesitas un terreno grande y bien ubicado llamame',
                             fec_publicacion:'2017-02-30',
                             estado:'Cancelado',
                             precio:2000,
                             metros_cuadrados:100,
                             ubicacion:'Calle Esmeraldas',
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"¿Que haria con un terreno tan grande?",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"Se ve muy bien",
                                        }],
                           }]
                  }
                  ]
   },
   {_id:        3,
    nombre:     'Hogar',
    scategorias:[{_id: 1,
                 nombre:'Electrodomesticos',
                 anuncios:[{_id:1,
                            _id_usu:2,
                            titulo:'Vendo Licuadora en buen estado',
                            descripcion:'Mandame un whatsapp si estas interesado',
                            fec_publicacion:'2017-02-08',
                            estado:'Disponible',
                            precio:100,
                            comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"La necesito",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"Consume mucha elctricidad >:v",
                                        }],
                          }]
                 },
                  {_id:2,
                  nombre:'Muebles',
                  anuncios:[{_id:1,
                             _id_usu:3,
                             titulo:'Vendo Hermosos Muebles',
                             descripcion:'Estos muebles combinaran con cualquier tapisado asi que llamame si no quieres perderlos',
                             fec_publicacion:'2017-02-01',
                             estado:'Vendido',
                             precio:1500,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"El color es perfecto",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"No me alcanza :(",
                                        }],
                          }]
                  }
                  ]
   },
   {_id:        4,
    nombre:     'Productos',
    scategorias:[{_id: 1,
                 nombre:'Limpieza',
                 anuncios:[{_id:1,
                            _id_usu:4,
                            titulo:'Vendo Sapolio Desinfectante',
                            descripcion:'Vendo Sapolio Desinfectante pino frasco 3785 ml si quieres uno o varios contactame',
                            fec_publicacion:'2017-01-28',
                            estado:'Disponible',
                            precio:10,
                            comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Este es un comentario",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"Este tambien",
                                        }],
                          }]
                 },
                  {_id:2,
                  nombre:'Decoracion',
                  anuncios:[{_id:1,
                             _id_usu:5,
                             titulo:'Reloj Analógico de Pared',
                             descripcion:'Vendo este hermoso Reloj Analógico de Pared con Diseño Espejo Amor-Plata',
                             fec_publicacion:'2017-02-10',
                             estado:'Disponible',
                             precio:97,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Este es un cometario electrico",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"Este es mecanico",
                                        }],
                           }]
                  },
                  {_id:3,
                  nombre:'Cocina',
                  anuncios:[{_id:1,
                             _id_usu:1,
                             titulo:'Vendo MagiDeal Portátiles',
                             descripcion:'Vendo genial MagiDeal Portátiles Inoxidable con Tenedores Cucharas Vajilla Palillo 12pcs Kit De Cubiertos',
                             fec_publicacion:'2017-02-30',
                             estado:'Disponible',
                             precio:85,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Muy importante tener este producto en casa",
                                          },],
                           }]
                  },
                  {_id:4,
                  nombre:'Salud',
                  anuncios:[{_id:1,
                             _id_usu:2,
                             titulo:'NUEVO COMPLEJO ARTICULAR CONDROESTIMULADOR',
                             descripcion:'Para deportistas que necesitan un suplemento eficaz con el objetivo de minimizar las lesiones y potenciar una recuperación acelerada.',
                             fec_publicacion:'2017-03-16',
                             estado:'Disponible',
                             precio:39,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Condroquien?",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"Nani?",
                                        }],
                            }]
                  }
                  ]
   },
   {_id:        5,
    nombre:     'Animales',
    scategorias:[{_id: 1,
                 nombre:'Gatos',
                 anuncios:[{_id:1,
                            _id_usu:3,
                            titulo:'Vendo gatos angora',
                            descripcion:'Si deseas comprar estos hermosos gatitos contactame.',
                            fec_publicacion:'2017-01-02',
                            estado:'Disponible',
                            precio:30,
                            comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Para la sopa",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"Para el estofado",
                                        }],
                            }]
                 },
                  {_id:2,
                  nombre:'Perros',
                  anuncios:[{_id:1,
                             _id_usu:4,
                             titulo:'Vendo cachorros pitbulls',
                             descripcion:'Vendo estos hermosos cachorros pitbulls a buen precio',
                             fec_publicacion:'2017-02-11',
                             estado:'Disponible',
                             precio:120,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"rapean?",
                                          },
                                        ],
                             }]
                  },
                  {_id:3,
                  nombre:'Conejos',
                  anuncios:[{_id:1,
                             _id_usu:5,
                             titulo:'Vendo conejos Cabeza de leon',
                             descripcion:'Vendo estos hermosos conejos que pueden ser tus mascotas ahora mismo.',
                             fec_publicacion:'2017-02-22',
                             estado:'Disponible',
                             precio:100,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Tambien pueden ser el almuerzo",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"y cabeza de tigre?",
                                        }],
                            }]
                  },
                  {_id:4,
                  nombre:'Hamsters',
                  anuncios:[{_id:1,
                             _id_usu:1,
                             titulo:'Vendo Geniales Hamsters',
                             descripcion:'Si necesitas estos pequeños amiguitos en tu hogar puedes contactarme.',
                             fec_publicacion:'2017-03-10',
                             estado:'Disponible',
                             precio:20,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"por que son geniales?",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"por q no? :v",
                                        }],
                           }]
                  }
                  ]
   },
   {_id:        6,
    nombre:     'Servicios',
    scategorias:[{_id: 1,
                 nombre:'Tecnico',
                 anuncios:[{_id:1,
                            _id_usu:2,
                            titulo:'Reparo Impresoras a domicilio',
                            descripcion:'Tengo mucha experiencia en el campo y puedo resolver cualquier problema con impresoras.',
                            fec_publicacion:'2017-03-12',
                            estado:'Disponible',
                            disponibilidad:'Inmediata',
                            comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Si pluto es un perro y goofy tambien",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"Vienes con impresora?",
                                        }],
                            }]
                 },
                  {_id:2,
                  nombre:'Educacion',
                  anuncios:[{_id:1,
                             _id_usu:3,
                             titulo:'Clases de matematica a domicilio',
                             descripcion:'Doy clases particulares a buen precio y tengo mucha experiencia en el campo',
                             fec_publicacion:'2017-02-18', 
                             estado:'Disponible',
                             disponibilidad:'Fines de semana',
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"2 y 2 son 4, 4 y 2 son 6",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"6 y 2 son 8 y 8, 16",
                                        }],
                             }]
                  },
                  {_id:3,
                  nombre:'Limpieza',
                  anuncios:[{_id:1,
                             _id_usu:4,
                             titulo:'Limpieza de vidrios especializada para empresas',
                             descripcion:'Otorgo servicios de limpieza para diversos locales en el sector si estas interesado contactame',
                             fec_publicacion:'2017-02-05',
                             estado:'Disponible',
                             disponibilidad:'Inmediata',
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Comentario interesante 2: el regreso",
                                          },],
                           }]
                  },
                  {_id:4,
                  nombre:'Decoracion',
                  anuncios:[{_id:1,
                             _id_usu:5,
                             titulo:'Decoraciones Geniales para tu hogar',
                             descripcion:'Somos expertos en el campo, si necesitas que decoren tu hogar llamanos',
                             fec_publicacion:'2017-03-17',
                             estado:'Disponible',
                             disponibilidad:'Dias entre semana',
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Y en la ciudad?",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"Si tuviera hogar :,v",
                                        }],
                            }]
                  }
                  ]
   },
   {_id:        6,
    nombre:     'Tecnologia',
    scategorias:[{_id: 1,
                 nombre:'Telefonos',
                 anuncios:[{_id:1,
                            _id_usu:1,
                            titulo:'Vendo Moto X a buen precio',
                            descripcion:'Vendo Moto X casi nuevo a un gran precio conversable',
                            fec_publicacion:'2017-03-22',
                            estado:'Disponible',
                            precio:120,
                            comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Se parece mucho al que me robaron",
                                          },],
                            }]
                 },
                  {_id:2,
                  nombre:'Tablets',
                  anuncios:[{_id:1,
                             _id_usu:2,
                             titulo:'Vendo Tablet Mini',
                             descripcion:'Vendo Tablet Mini estado 9 de 10',
                             fec_publicacion:'2017-02-06', 
                             estado:'Disponible',
                             precio:130,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Son de las que explotan?",
                                          },
                                        {fecha:'2018-01-01',
                                          usuario:2,
                                          comentario:"Allahu Akbar!!",
                                        }],
                             }]
                  },
                  {_id:3,
                  nombre:'Computadoras',
                  anuncios:[{_id:1,
                             _id_usu:3,
                             titulo:'Vendo PC-Gamer',
                             descripcion:'Vendo PC-Gamer casi nueva si te interesa mandame un whatsapp',
                             fec_publicacion:'2017-02-14',
                             estado:'Disponible',
                             precio:2500,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Nyah Nyah Cthulhu aproves",
                                          },],
                             }]
                  },
                  {_id:4,
                  nombre:'Laptops',
                  anuncios:[{_id:1,
                             _id_usu:4,
                             titulo:'Vendo Laptop de sexta generacion',
                             descripcion:'Vendo laptop Accer en muy buen estado perfecta para trabajo',
                             fec_publicacion:'2017-04-01',
                             estado:'Vendido',
                             precio:1500,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"es Acer >:v",
                                          },
                                          ],
                           }]
                  },
                  {_id:5,
                  nombre:'Camaras',
                  anuncios:[{_id:1,
                             _id_usu:5,
                             titulo:'Vendo Camara semiprofesional',
                             descripcion:'Genial camara de 32 mega pixeles que puede ser tuya si me llamas ahora',
                             fec_publicacion:'2017-04-03',
                             estado:'Disponible',
                             precio:1200,
                             comentarios:[
                                        {fecha:'2018-01-02',
                                          usuario:3,
                                          comentario:"Y toma las fotos sola o por que tan cara?",
                                          },
                                        ],
                           }]
                  }
                  ]
   }
]);


