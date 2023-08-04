//Quiz Game Script
// Written by Ryan Stokes

//Random Question Values 1 and 2
var fruitValue1 = Math.floor((Math.random()*100) + 50);
var fruitValue2 = Math.floor(Math.random()*50);

//Random Question Setup
//Inserts random question values 1 and 2 into question and inserts into HTML
var randomQuestion = "If you have " + fruitValue1 + " Bananas and eat " + fruitValue2 + ", how many do you have left?";
document.getElementById("random-question").innerHTML = randomQuestion;

//Sets the correct random answer and inserts into HTML
var randomAnswer = fruitValue1 - fruitValue2;
document.getElementById("random-answer").innerHTML = randomAnswer;

//Sets value attribute of correct random questionn radio
var randomValue = document.getElementById("random-value");
randomValue.setAttribute("value", toString(randomAnswer));

//Sets the randomly generated wrong answers and inserts into HTML
var randomWrongOne = parseInt(randomAnswer / 2)
document.getElementById("random-wrong-1").innerHTML = randomWrongOne
var randomWrongTwo = randomAnswer + Math.floor((Math.random()*31) + 2)
document.getElementById("random-wrong-2").innerHTML = randomWrongTwo
var randomWrongThree = randomAnswer * Math.floor((Math.random()*4)+2)
document.getElementById("random-wrong-3").innerHTML = randomWrongThree

//An array of the right answers to the quiz
var answers = [
    "Purple",
    "Apple",
    //Random answer generated above is inserted as a string into this array of answers
    toString(randomAnswer),
    "Orange"
];

//Correct answers set as 0 at quiz start
var correct = 0;

//Adds functionality to the submit button
var btn = document.getElementById("submit-button");
//On click runs the submit function
btn.addEventListener("click", submit);

//This function checks the users answers against the answers in the answers array using a for loop
function checkAnswers(){
    //correct is reset to default value of 0
    correct = 0;
    for (let i = 0; i < answers.length; i++) {
        //Takes user choice by looping through the values of the checked radio buttons 
        var userChoice = document.querySelector('input[name = q'+(i+1)+']:checked').value;
        //Correct answers are incremented by one if answers match
        if (userChoice == answers[i]) {
            correct++;
        } 
    }
}

//This function is activated when submit button is clicked
function submit(){
    //Answers checked on submit
    checkAnswers();
    //Alert notifying user of number of questions correct
    if (correct == 1) {
        //if only one question is correct "question" is not pluralised
        prompt("You got " + correct + " question correct!, enter email below to be entered into the draw");
        alert("Thanks for playing")
        //User is returned to homepage after playing
        window.location.href = "html/index.html"
        //"question pluralised if more than one question correct"
    } else {
        prompt("You got " + correct + " questions correct!, enter email below to be entered into the draw");
        alert("Thanks for playing")
        //User is returned to homepage after playing
        window.location.href = "html/index.html"
    }
}