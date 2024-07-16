document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action of anchor tag

            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });

            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Initial Active Section
    sections.forEach(section => {
        if (section.classList.contains('home-section')) {
            section.classList.add('active');
        }
    });

    // Handle sub-navbar links
    const subNavLinks = document.querySelectorAll('.sub-navbar .nav-link');
    subNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action of anchor tag

            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });

            subNavLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
