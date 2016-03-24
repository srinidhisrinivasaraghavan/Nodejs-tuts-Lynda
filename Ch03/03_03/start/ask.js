var questions = ["what is your name"
, "what is your hobby"
,"what is your programming language"
];

var answers=[];

function ask(i) //i is index of question
{
	process.stdout.write(questions[i]);
}

//This runs for ever unitil we stop or errors
//setting an event listner on data enter
//when data event is raised
//This is a listner
process.stdin.on('data', function(data){
	answers.push(data.toString().trim());

	if(answers.length < questions.length)
	{
		ask(answers.length);
	}
	else
	{
		process.exit();
	}
});

//This is another event
//Event is exit
process.on('exit',function(){
	process.stdout.write("\n\n");
	process.stdout.write(answers[0]+"  "+answers[1]+" "+answers[2]);
	process.stdout.write("\n\n");
})

ask(0);