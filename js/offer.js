// Written by Aneta Kotas
var button = document.getElementById("offer-check");
var input = document.getElementById("offer-question");
var response = document.getElementById("offer-response");
const OUROFFER = ["carrots", "peppers", "tomatoes", "potatoes", "brussel", "apples", "oranges", "strawberries", "bananas", "pears", "drinks", "alcohol"];


function checkItems() {
    for (let i = 0; i < OUROFFER.length; i++) {
        var x = input.value.toLowerCase();
        if(x == OUROFFER[i]) {
            response.innerHTML = "Yes, we have " + OUROFFER[i] + ".";
            break;
        } else {
            response.innerHTML = "We might not, but to be sure visit our store! Sorry!";
        }
    }
}