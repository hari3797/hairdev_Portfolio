document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scroll for hero button
    const heroButton = document.querySelector('.hero-buttons a.btn-primary');
    if (heroButton) {
        heroButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    }
});
