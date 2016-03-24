var waitTime = 3000; // in milliseconds
var currentTime = 0;
var waitInterval =500;
var percentWaited =0;

console.log("wait for it");

function writeWaitingPercent(p)
{
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write("waiting " + p+"%");
	
}

// after 3 seconds this method called
setTimeout(function(){
	// used to stop the setInterval function
	clearInterval(interval);

	//100 percent done
	writeWaitingPercent(100);

	//done
    console.log("\ndone");
},waitTime);


//Every half second this methid called
//Note that this function assigned to a variale. Required for clearInterval
var interval=setInterval(function(){

//to see how much time over 
currentTime+= waitInterval

//percent
percentWaited=Math.floor((currentTime/waitTime)* 100);

//print the percent
writeWaitingPercent(percentWaited);
},waitInterval);

//Initial percent is 0
writeWaitingPercent(percentWaited);