var events = require("events");
var eventEmitter = require('events').EventEmitter;
var util = require('util');

var emmiter = new events.EventEmitter();

emmiter.on('customEvent',function(message,status){
	console.log(status+" "+message);
});

emmiter.emit('customEvent',"Hello world", 200);

//********************************************************

var Person = function(name)
{
	this.name = name;
};

//inherit person from EventEmitter
util.inherits(Person, eventEmitter);

var ben = new Person("Ben Franklin");

ben.on('speak', function(said){
 console.log(ben.name+ " says "+said);
});

ben.emit("speak","Pray and work");