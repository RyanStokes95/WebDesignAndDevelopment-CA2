// Written by Aneta Kotas
var hamburger = document.getElementById("ham-menu");
var hamContent = document.getElementById("ham-content");

hamburger.addEventListener('click', () => {
    
    
    if(hamContent.style.display == "none") {
        hamContent.style.display = "flex";
    } else {
        hamContent.style.display = "none";
    }
});