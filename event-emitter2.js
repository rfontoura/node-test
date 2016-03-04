var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listener1 = function listener1() {
    console.log('Listener 1 executado.');
};

// listener #2
var listener2 = function listener2() {
    console.log('Listener 2 executado.');
};

// liga o evento 'connection' com a função listener1
eventEmitter.addListener('connection', listener1);

// liga o evento 'connection' com a função  listener2
eventEmitter.on('connection', listener2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " listeners escutando o evento 'connection'");

// dispara o evento 'connection' 
eventEmitter.emit('connection');

// Remove a listação do listener1 para o evento connection
eventEmitter.removeListener('connection', listener1);
console.log("Listener 1 desvinculado.");

// dispara o evento 'connection' 
eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " listeners escutando o evento 'connection'");

console.log("Programa finalizado.");