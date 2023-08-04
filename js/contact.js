// Written by Arisha Mirza
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submission');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission (page reload)

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            submitButton.value = 'Please fill in the form';
        } else {
            // Show the feedback message
            const feedbackMessage = "Thanks for your feedback. We will be in touch shortly.";
            alert(feedbackMessage);
            window.location.reload();
        }
    });
});
