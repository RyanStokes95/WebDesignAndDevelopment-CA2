var selectElement = document.getElementById("review");

selectElement.addEventListener('change', () => {
    var pElement = document.getElementById("review-text");

    switch(selectElement.value) {
        case "andrew":
            pElement.innerHTML = '"Absolutely love this vegetable shop! The produce is always fresh and of high quality. The staff is friendly and knowledgeable. A delightful shopping experience every time!" - Andrew';
            break;
        case "monika":
            pElement.innerHTML = '"Hidden gem, unique veggies, eco-friendly." - Monika';
            break;
        case "kate":
            pElement.innerHTML = '"The selection here is impressive, with unique and exotic vegetables that are hard to find elsewhere. I appreciate their commitment to sustainability and eco-friendly packaging options." - Kate';
            break;
        case "sam":
            pElement.innerHTML = '"Best local veggie shop! Organic & affordable. Five out of Five!" - Sam';
            break;
    }
});