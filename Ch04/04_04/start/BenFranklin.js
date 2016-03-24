// we are importing a custom module here. use the path. No js extension required
var Person = require("./lib/Person");

var ben = new Person("Ben Franklin");
var sri = new Person("Srinidhi");

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});

sri.on('tell', function(tells){
	console.log(sri.name+" says "+tells);
})



ben.emit('speak', "You may delay, but time will not.");
sri.emit("tell","Pray and work");
