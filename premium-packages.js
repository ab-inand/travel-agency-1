document.addEventListener('DOMContentLoaded', function() {
    const premiumForm = document.getElementById('premium-form');
    const formError = document.getElementById('form-error-message');
    const submissionConfirmation = document.getElementById('submission-confirmation');
    const closeConfirmationButton = document.getElementById('close-confirmation');

    if (premiumForm) {
        premiumForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            if (validateForm()) {
                formError.style.display = 'none'; // Hide error message if valid
                // Simulate form submission and show confirmation
                submissionConfirmation.style.display = 'flex'; // Show confirmation overlay
                // In a real application, you would send data to the server here
                // and show confirmation upon successful server response.
            } else {
                formError.style.display = 'block'; // Show error message
                // Optionally, scroll to the top of the form or the error message
                formError.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    if (closeConfirmationButton) {
        closeConfirmationButton.addEventListener('click', function() {
            submissionConfirmation.style.display = 'none'; // Hide confirmation overlay
            premiumForm.reset(); // Optionally reset the form after confirmation
        });
    }

    function validateForm() {
        let isValid = true;
        const requiredFields = premiumForm.querySelectorAll('[required]'); // Select all required fields

        requiredFields.forEach(field => {
            if (!field.value.trim()) { // Check if value is empty or just whitespace
                isValid = false;
                field.classList.add('error-field'); // Add error class for visual indication (optional CSS styling)
            } else {
                field.classList.remove('error-field'); // Remove error class if valid
            }
        });

        return isValid;
    }
});