const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 60);
            observer.unobserve(e.target);
        }
    });
}, {
    threshold: 0.12
});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Adding hamburger menu functionality
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the mobile menu when a link is clicked
document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
hamburger.classList.remove('active');

// Close hamburger menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});