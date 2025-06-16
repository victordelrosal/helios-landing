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
    const assessmentSection = document.getElementById('self-assess');
    const pricingSection = document.getElementById('pricing');

    if (submittedEmail === 'YES') {
        if (assessmentSection) {
            assessmentSection.style.display = 'none';
        } else {
            console.warn('Assessment section (id="self-assess") not found. Cannot hide it.');
        }

        if (pricingSection) {
            pricingSection.style.display = 'block';
            // If the page is loaded without a hash, scroll to pricing section
            if (!window.location.hash) {
                setTimeout(() => {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                }, 500); // Delay to allow rendering
            }
        } else {
            console.warn('Pricing section (id="pricing") not found. Cannot show or scroll to it.');
        }
    } else { // This covers submittedEmail === 'NO' (due to initialization logic)
        if (assessmentSection) {
            assessmentSection.style.display = 'block';
        } else {
            console.warn('Assessment section (id="self-assess") not found. Cannot show it.');
        }

        if (pricingSection) {
            pricingSection.style.display = 'none'; // Explicitly hide pricing section
        } else {
            console.warn('Pricing section (id="pricing") not found. Cannot hide it.');
        }
    }
});