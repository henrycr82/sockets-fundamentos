//Aquí definiremos las funciones que se dispararan cuando enviemos o recibamos información del servidor
// on son para escuchar información
// emit para enviar o emitir información

// io() lo inicializamos en  server/sockets/socket.js
var socket = io()

//Función para establecer un canal de comunicación abierto con el server.
 socket.on('connect', function() {
	console.log('Conectado con el servidor');
});

//Función para saber si perdimos comunicación con el server.
 socket.on('disconnect', function() {
	console.log('Perdimos conexión con el servidor');
});

//Función para enviar información al server.
//'enviarMensaje' es el nombre del evento que el servidor va a escuchar (deberia ser un nombre sin espacios o caracteres especiales)
 socket.emit('enviarMensaje',  {
	nombre: 'Henry',
	mensaje: 'Hola mundo'
//'callback' para verificar que la información llego al server
//'respuesta' nos indica si llego la propiedad 'nombre' del objeto 'data' al server
}, function(respuesta) {
	console.log('Respuesta Server:', respuesta)
});

//Función para recibir información desde el server
//'enviarMensaje' es el nombre del evento que se envio desde el cliente
//'mensaje' es el objeto que enviamos desde el server
socket.on('enviarMensaje', function (mensaje)  {
	console.log('Respuesta Server:', mensaje);
});