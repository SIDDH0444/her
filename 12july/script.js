document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close');

    // Show the popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'block';
    }, 3000);

    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Handle form submission
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
        popup.style.display = 'none';
    });
});
