var question1 = null;
var question2 = null;
function processResults(){
	console.log("processResults")
}
function getPersonality() {
	console.log("getPersonality")
}
function resetQuiz(){
	console.log("resetQuiz")
}
//Event listeners 

$(document).ready(function(){
	$('#try-again').click(resetQuiz);
	$('#form-submit').click(processResults);



});
