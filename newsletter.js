//Newsletter Script

//Assigning variables to form HTML Elemants

var firstName = document.getElementById("fName")
var lastName = document.getElementById("lName")
var email = document.getElementById("email")
var mobile = document.getElementById("mobile")
var newsChoice = document.getElementById("news-choice")

//Assigning variable to submit button
var submit = document.getElementById("form-submit");

//Adds an event listener to the form submit button, on click submits and displays a message to the user
submit.addEventListener("click", () => {
    var form = document.getElementById("form");
    var formContainer = document.getElementById("form-container");
    //Form hidden after completion, replaced by thank you message
    form.style.display = "none";
    formContainer.innerHTML = "Thank you for signing up!";
    formContainer.style.textAlign = "center"; 
    formContainer.style.fontSize = "large" 
    var anchor = document.getElementById("anchor");
    //Link back home after quiz completion
    anchor.innerHTML = "Return Home";
    anchor.style.marginLeft =  "47vw"; 
    anchor.style.display =  "inline-block";  
    anchor.style.marginBottom =  "30px"; 
    anchor.style.marginTop =  "150px"; 
    anchor.style.fontSize =  "larger"; 

})

var validOne = false
var validTwo = false
var validThree = false
var validFour = false

//Form fields validation
firstName.addEventListener("input", () => {
    var inputValue1 = firstName.value
    //First name must be longer then 2 characters
    if (inputValue1.length > 2) {
        validOne = true
        validation
        //Input field is green if input is valid
        firstName.style.backgroundColor = "rgb(132, 204, 135)"
    }
    //If condition isnt met submit remains disabled
    else{
        //Input filed is red is input is invalid
        submit.disabled = true
        firstName.style.backgroundColor = "rgb(221, 124, 124)"
    }
})
lastName.addEventListener("input", () => {
    var inputValue2 = lastName.value
    //Last name must be longer then 2 characters
    if (inputValue2.length > 2 &&
        inputValue2.length < 20
        ) {
        validTwo = true
        validation()
        //Input field is green if input is valid
        lastName.style.backgroundColor = "rgb(132, 204, 135)"
    }
    else{
        submit.disabled = true
        //Input filed is red is input is invalid
        lastName.style.backgroundColor = "rgb(221, 124, 124)"
    }
})
email.addEventListener("input", () => {
    var inputValue3 = email.value
    //Email must be atlest 10 characters and end with ".com"
    if (inputValue3.length >= 10 &&
        inputValue3.charAt(inputValue3.length-1) == "m" &&
        inputValue3.charAt(inputValue3.length-2) == "o" &&
        inputValue3.charAt(inputValue3.length-3) == "c" &&
        inputValue3.charAt(inputValue3.length-4) == ".") {
        validThree = true
        validation()
        //Input field is green if input is valid
        email.style.backgroundColor = "rgb(132, 204, 135)"
        }
    else{
        submit.disabled = true
        //Input filed is red is input is invalid
        email.style.backgroundColor = "rgb(221, 124, 124)"
    }
})
mobile.addEventListener("input", () => {
    var inputValue4 = mobile.value
    //Mobile number must be 10 digits and start with 08
    if (inputValue4.length > 9 &&
        inputValue4.length < 11 &&
        inputValue4.charAt(0) == 0 &&
        inputValue4.charAt(1) == 8) {
        validFour = true
        validation()
        //Input field is green if input is valid
        mobile.style.backgroundColor = "rgb(132, 204, 135)"
    }
    else{
        submit.disabled = true
        //Input filed is red is input is invalid
        mobile.style.backgroundColor = "rgb(221, 124, 124)"
    }
    })

    function validation(){
        if (validOne == true &&
            validTwo == true &&
            validThree == true &&
            validFour == true
            ) {
            submit.disabled = false
        }
    }