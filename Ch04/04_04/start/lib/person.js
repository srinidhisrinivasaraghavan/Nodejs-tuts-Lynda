var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

//the variables in this module as local to this module. Cant consume elsewhere
// so we export 

// here we export the Person constructor
module.exports = Person;