var readLine = require('readline');

// using readLine to create interface
var rl = readLine.createInterface(process.stdin, process.stdout);

//person object
var person = {
	name:"",
	sayings:[]
};

// question methods has the call back which has the answer entered
// readline keeps listening till exit or stop
rl.question("what is ur name", function(answer){

	person.name = answer;

	// set
	rl.setPrompt("what would "+person.name+" say?");
	rl.prompt();

	// event listener on entering some value(saying)
	rl.on("line", function(saying)
	{
		if(saying.toLowerCase().trim()=="exit")
		{
			rl.close();
		}
		else
		{
			person.sayings.push(saying.trim());
			rl.setPrompt("what else "+person.name+" would say? Enter exit to leave");
			rl.prompt();
		}

		//console.log(saying.trim());
	})

	//console.log(answer);
})

// on exit, the rl gets closed, on close event do the following
rl.on("close",function()
{
console.log(person.name);
console.log(person.sayings);

//exit the process
process.exit();
});