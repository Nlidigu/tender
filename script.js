// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();
    
    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('formSuccess').innerHTML = '';
    
    let isValid = true;
    
    // Validate Name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
        isValid = false;
    }
    
    // Validate Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    
    // Validate Subject
    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required.';
        isValid = false;
    }
    
    // Validate Message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
        isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
        document.getElementById('formSuccess').innerHTML = '<div class="alert alert-success">Thank you! Your message has been sent successfully.</div>';
        document.getElementById('contactForm').reset();
    }
});
// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    let darkModeButton = document.getElementById('darkModeToggle');
    
    if (darkModeButton) {
        darkModeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Save preference in browser
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeButton.textContent = 'Light';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeButton.textContent = 'Dark';
            }
        });
        
        // Load saved preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeButton.textContent = 'Light';
        } else {
            darkModeButton.textContent = 'Dark';
        }
    }
});