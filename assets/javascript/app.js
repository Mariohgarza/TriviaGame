var gameTime = 30;
var time = 0;
var myVar;
var totalQuestions = 6;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var rightAnswers = ["India", "Subway", "500", ".length", "Snow White and the Seven Dwarfs", "Uruguay"];
var startedGame = false;


function onStart() {
	clearInterval(myVar);
	$('#questionaire').show();
	$('#greeting').text("Welcome to Trivia!");
	$('#play').text("START");
	time = gameTime;
	resetGame();	
	myVar = setInterval(myTimer, 1000);
}

function myTimer() {
	    $('#display').text(--time);
	    if(time <= 0){
	    	clearInterval(myVar);
	    	checkAnswers();
	    	unansweredQuestions = totalQuestions - incorrectAnswers - correctAnswers;
	    	displayResults();
	    	$('#greeting').text("GAME OVER");
	    	$('#play').text("PLAY AGAIN");
	    	$('#questionaire').hide();
	    	startedGame = false;

	    }
}

$('#play').click(function() {
	console.log("Start");
	if(startedGame == false){
		startedGame = true;
		onStart();
	}
});
$('#questionaire').hide();


function checkAnswers(){
	var radios1 = document.getElementsByName('question1');
	var radios2 = document.getElementsByName('question2');
	var radios3 = document.getElementsByName('question3');
	var radios4 = document.getElementsByName('question4');
	var radios5 = document.getElementsByName('question5');
	var radios6 = document.getElementsByName('question6');

	var allRadios = [radios1, radios2, radios3, radios4, radios5, radios6];



//loop over every question
	for (var i = 0; i < allRadios.length; i++){
		//loop every answer of the question
		for(var j = 0; j < allRadios[i].length; j++){
		 	if (allRadios[i][j].checked){
		 			isCorrect(allRadios[i][j].value);
		 			allRadios[i][j].checked = false;

			}
	}
	}
}


function isCorrect(answer){
	for(var i =0; i< rightAnswers.length; i++){
		console.log("attempting: "  + answer);
		if(rightAnswers[i] == answer){
			console.log("this is a hit: "  + rightAnswers[i]);
			correctAnswers++;
			return;
		}
	}
	incorrectAnswers++;
}

function resetGame(){
	 correctAnswers = 0;
     incorrectAnswers = 0;
     unansweredQuestions = 0;
     $('#correctAnswers').hide();
	 $('#incorrectAnswers').hide();
	 $('#unansweredQuestions').hide();
}


function displayResults(){
		$('#correctAnswers').text("Correct answers: " + correctAnswers);
		$('#incorrectAnswers').text("Incorrect answers: " + incorrectAnswers);
		$('#unansweredQuestions').text("Unanswered answers: " + unansweredQuestions);
		$('#correctAnswers').show();
		$('#incorrectAnswers').show();
		$('#unansweredQuestions').show();


}

$('#done').click(function() {
	clearInterval(myVar);
	  checkAnswers();
	  unansweredQuestions = totalQuestions - incorrectAnswers - correctAnswers;
	  displayResults();
	  $('#greeting').text("GAME OVER");
	  $('#play').text("PLAY AGAIN");
	  $('#questionaire').hide();
	  startedGame = false;
});


// setTimeout(function() {}, 10);

// timeConverter: function(t){
// 	var minutes= Math.floor(t/60);
// 	var seconds = t-(minutes * 60);
// 	if (seconds <30) {
// 		seconds="0" + seconds;
// 	}
// 	}

// 	if (minutes === 0){
// 		minutes ="00";
// 	}
// 	else if (minutes<30){
// 		minutes="0" + minutes;
// 	} 
// }
// 	return minutes + ":" + seconds;
// 	}