var question1 = null;
var question2 = null;
var quesion3 = null;
var question4 = null;

function processResults(){
	console.log("processResults")
}
function getPersonality() {
	console.log("getPersonality")
}
function resetQuiz(){
	console.log("resetQuiz")
}
let styleDictionary = {
	vest: 0;
	sash: 3;
};
let lawDictionary = {
	honest: 0;
	friendly: 1;
	considerate: 2;
	courageous: 0;
	responsible: 3;
};
let qualityDictionary = {
	confident: 3;
	truthful: 2;
	fincially: 0;
	ambitious: 1;

};
let challenges = {
	
}
//Event listeners 

$(document).ready(function(){
	$('#try-again').click(resetQuiz);
	$('#form-submit').click(processResults);



});
