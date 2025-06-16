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

// Display content based on submittedEmail status
const submittedEmail = localStorage.getItem('submittedEmail');
document.addEventListener('DOMContentLoaded', function() {
    if (submittedEmail === 'YES') {
        // Hide assessment section
        const assessmentSection = document.getElementById('self-assess');
        if (assessmentSection) {
            assessmentSection.style.display = 'none';
        }
        
        // Ensure pricing section is visible
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.style.display = 'block';
        }
        
        // If the page is loaded without a hash, scroll to pricing section
        if (!window.location.hash) {
            setTimeout(() => {
                document.getElementById('pricing').scrollIntoView({behavior: 'smooth'});
            }, 500);
        }
    } else {
        // Ensure assessment section is visible
        const assessmentSection = document.getElementById('self-assess');
        if (assessmentSection) {
            assessmentSection.style.display = 'block';
        }
    }
});