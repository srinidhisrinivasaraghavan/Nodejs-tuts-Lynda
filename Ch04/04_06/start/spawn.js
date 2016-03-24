var spawn = require("child_process").spawn;

//start the alwaystalking file using child process
var cp = spawn("node", ["alwaysTalking"]);

//when even alwaysTalking prints something on console, log that here using child process
cp.stdout.on("data", function(data)
{
	console.log(data.toString());
});

// when the child process closes, log it and exit
cp.on("close", function(){
	console.log("child ended");
	process.exit();
})

// after sometime write to cmdline // this will stop alwaysTalking
setTimeout(function(){
	cp.stdin.write("stop");
},4000);