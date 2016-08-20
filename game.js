// Variables
var GameState = "NotStarted";
// var input = document.getElementById("cmdin").value;
var TimingVariable = setInterval(myTimer, 1000);
var squiggle = "x"
var aMARK = "&#47;"
var bMARK = "&#45;"
var cMARK = "&#92;"
var dMARK = "&#124;"

function myTimer() {
	var d = new Date();
	var newVal
	var widgetvalue = document.getElementById("widget").value

	if (document.getElementById("cmdin").value !== "pause"){
		document.getElementById("time").innerHTML = d.toLocaleTimeString();
	}
	if (squiggle == "x"){newVal = aMARK;}
	else if (squiggle == aMARK){newVal = bMARK;}
	else if (squiggle == bMARK){newVal = cMARK;}
	else if (squiggle == cMARK){newVal = dMARK;}
	else if (squiggle == dMARK){newVal = aMARK;}
	else {newVal = "What?";}

	squiggle = newVal
	document.getElementById("widget").innerHTML = newVal

}
function TrueFocus(){document.getElementById("cmdin").focus()}
function StartGame(){
	GameState = "Running"
	lineout('')
	lineout('Game is intialising')
	setTimeout(function () {lineout("It has happend")}, 5000);
	lineout("Game is Started")
}
function send() {
	var input = document.getElementById("cmdin").value;
	var clearyes = true
	// var command = selectfirstword(input)
	// var arguments =

	if (GameState == "Running"){
		if ((input.startsWith("a") && input.length == 1)){
			lineout("hi");
			timerTime = 250
		} else if (input.startsWith("b")) {
			lineout("bye");
			timerTime = 100
		} else {
			lineout("Unrecognised Command");
			clearyes = false
			timerTime = 10
		}
	}
	else if (GameState == "Paused"){
		// TODO: Looking for Unpause, Pause, Start, Help
	}
	else if (GameState == "NotStarted"){
		// TODO: Looking for Start, Help, _blank, Unrecognised
		if (input == "Start"){
			StartGame()
		}
	}
	else {// Game Error : Unexpected Game State - Reintialising
	}

	if (clearyes == true) {document.getElementById("cmdin").value = ""}
	TrueFocus();
};
function lineout(text){
	var ouptut_main = document.getElementById("cliout");
	document.getElementById("cliout").innerHTML += text + "</br>\n&#62; ";
}
