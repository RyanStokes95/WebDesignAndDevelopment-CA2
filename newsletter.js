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
    var anchor = document.getElementById("anchor");
    //Link back home after quiz completion
    anchor.innerHTML = "Return Home";

})

//Form fields validation
firstName.addEventListener("input", () => {
    var inputValue1 = firstName.value
    //First name must be longer then 2 characters
    if (inputValue1.length > 2) {
        submit.disabled = false
    }
    //If condition isnt met submit remains disabled
    else{submit.disabled = true}
})
lastName.addEventListener("input", () => {
    var inputValue2 = lastName.value
    //Last name must be longer then 2 characters
    if (inputValue2.length > 2) {
        submit.disabled = false
    }
    else{submit.disabled = true}
})
email.addEventListener("input", () => {
    var inputValue3 = email.value
    //Email must be atlest 10 characters and end with ".com"
    if (inputValue3.length > 10 &&
        inputValue3.charAt(inputValue3.length-1) == "m" &&
        inputValue3.charAt(inputValue3.length-2) == "o" &&
        inputValue3.charAt(inputValue3.length-3) == "c" &&
        inputValue3.charAt(inputValue3.length-4) == ".") {
        submit.disabled = false
        }
    else{
        submit.disabled = true
    }
})
mobile.addEventListener("input", () => {
    var inputValue4 = mobile.value
    //Mobile number must be 10 digits and start with 08
    if (inputValue4.length > 9 &&
        inputValue4.charAt(0) == 0 &&
        inputValue4.charAt(1) == 8) {
        submit.disabled = false
    }
    else{submit.disabled = true}
    })