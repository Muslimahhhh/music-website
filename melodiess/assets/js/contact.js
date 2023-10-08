document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const confirmationMessage = document.getElementById('confirmation');

    contactForm.addEventListener('submit', function(event) {
        // Initialize a flag to track validation status
        let isValid = true;

        // Validate name field (non-empty)
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            isValid = false;
        }

        // Validate email field (format)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Validate message field (non-empty)
        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            isValid = false;
        }

        // If all validation passes, display the confirmation message
        if (isValid) {
            // Prevent the form from submitting to a server
            event.preventDefault();

            // Hide the form and show the confirmation message
            contactForm.style.display = 'none';
            confirmationMessage.style.display = 'block';
        }
    });
});


