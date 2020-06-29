//Asignamos por Destructuring 
const { io} = require('../server');

//Verificar conexión con el cliente
//client información del usuario(cliente) que se conecto
io.on('connection', (client) => {
	
	console.log('Usuario conectado');

	//Función para enviar información al cliente.
	//'enviarMensaje' es el nombre del evento que el cliente va a escuchar (deberia ser un nombre sin espacios o caracteres especiales)
	client.emit('enviarMensaje',  {
		nombre: 'Administrador',
		mensaje: 'Bienvenido'
	});

	//para saber si un usuario se desconecto
	// (Cerrar la sesión, cerrar la pestaña del navegador, cerrar el navegador, etc)
	client.on('disconnect', (client) => {
		console.log('Usuario desconectado');
	});

	//Función para recibir información desde el cliente
	//'enviarMensaje' es el nombre del evento que se envio desde el cliente
	//'data' es el objeto que enviamos desde el cliente
	//callback función para verificar la retroalimentanción (server/cliente).
	client.on('enviarMensaje',  (data, callback) => {
		
		console.log(data);
		/*
			Para enviar el mensaje que recibimos de un usuario o todos los demas usuarios
			Ejemplo, desde una ventana del navegador envio este mensaje:
			socket.emit('enviarMensaje',  {
				nombre: 'Gabriela',
				mensaje: 'Hola mundo'
			});
			
			Este código permite que la respuesta ''
			la vea en todas las ventanas que tengo abiertas.
			
		*/
		/*client.broadcast.emit('enviarMensaje',  {
			nombre: data.nombre,
			mensaje: data.mensaje
		});*/
		//Esto es igual a lo que comente arriba
		client.broadcast.emit('enviarMensaje',  data);

		//Si llega la propiedad  'nombre' del objeto 'data' entonces retornamos el callback de que 'Todo salio bien', caso contrario retornemos 'Hubo un error'.
		/*if(data.nombre){
			callback({
				respuesta: 'Todo salio bien'
			});
		}else{
			callback({
				respuesta: 'Hubo un error'
			});
		}*/
	});
});