document.addEventListener('DOMContentLoaded', () => {
    const revealSections = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            } else {
                entry.target.classList.remove('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealSections.forEach(section => revealObserver.observe(section));
});
