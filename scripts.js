document.addEventListener("DOMContentLoaded", function() {
    // Function to add 'visible' class to sections when in view
    const sections = document.querySelectorAll('.section-animated');
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Open the contact form when clicking WhatsApp icon
    document.getElementById('whatsapp-icon').addEventListener('click', function(event) {
        event.preventDefault();
        const formContainer = document.getElementById('contact-form-container');
        formContainer.style.display = 'block';
    });

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your message has been sent!');
        document.getElementById('contact-form-container').style.display = 'none';
    });
});
