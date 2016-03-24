var exec = require("child_process").exec;
// cmd commands - dir
exec("dir", function(errors, stdout){
	if(errors)
		throw errors;
	else
		console.log(stdout);
});

// cmd command node -v // version of node.js
exec("node -v", function(errors, stdout){
	if(errors)
		throw errors;
	else
		console.log(stdout);
});


