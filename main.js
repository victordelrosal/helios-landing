// Ensure default value for submittedEmail in localStorage
if (!localStorage.getItem('submittedEmail')) {
    localStorage.setItem('submittedEmail', 'NO');
}

function handleEmailSubmission(email) {
    // ...existing code...
    if (isValidEmail(email)) { // Assuming isValidEmail is a function that validates the email
        localStorage.setItem('submittedEmail', 'YES');
        // ...existing code...
    }
    // ...existing code...
}