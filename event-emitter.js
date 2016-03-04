// importa módulo 'events'
var events = require('events');

// cria um objeto EventEmitter
var eventEmitter = new events.EventEmitter();

// cria um event handler
var connectHandler = function connected() {
  console.log('conexão efetuada.');
  
  // executa o evento data_received
  eventEmitter.emit('data_received');  
};

// liga o evento de conexão com o handler
eventEmitter.on('connection', connectHandler);

// liga o evento data_received com uma função anônima
eventEmitter.on('data_received', function() {
   console.log('dados recebidos.'); 
});

// dispara o evento de conexão
eventEmitter.emit('connection');

console.log('Programa finalizado.');