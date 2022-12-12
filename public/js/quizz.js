// const questions = [["1+1","2"],["2+2","4"]]
// var questionNo = 1;
// var score =0;
// function clickButton(){
//     check();
//     questions.shift();
//     questionNo++;
//     setup();
// }
// function setup(){
//     if (questions.length != 0) {
//         document.getElementById("question").innerHTML = questions[0][0];
//         document.getElementById("questionNo").innerHTML = "Question " + questionNo;
//     }
//     else{
//         document.getElementById("questionNo").innerHTML ="You 're done!";
//         document.getElementById("question").innerHTML ="Your score is: "+ score;
//         document.getElementById("text-field").remove();
//         document.getElementById("button").remove();
//
//     }
// }
// function check(){
//     if(document.getElementById("text-field").value == questions[0][1]){
//         console.log("correct!");
//         score++;
//         document.getElementById("text-field").value="";
//     }
// }
    var numQues=10;
    var numChoi=3;
    var answers=new Array(10);
    answers[0]="WOW";
    answers[1]="first";
    answers[2]="10";
    answers[3]="the word I";
    answers[4]="names of the seasons";
    answers[5]="titles";
    answers[6]="Buddhist, University";
    answers[7]="Police";
    answers[8]="musical instruments";
    answers[9]="all wrong except The";
    function getScore(form){
    var score=0;
    var currElt;
    var currSelection;
    for (i=0; i<numQues; i++){
    currElt=i*numChoi;
    for (j=0; j<numChoi; j++){
    currSelection=form.elements[currElt+j];
    if (currSelection.checked){
    if (currSelection.value==answers[i]){
    score++;
    break;
    }}}}
    score=Math.round(score/numQues*100);
    form.percentage.value=score+"%";
    var correctAnswers="";
    for (i=1; i<=numQues; i++){
    correctAnswers+=i+". "+answers[i-1]+"\r\n";
    }
    form.solutions.value=correctAnswers;
    }
