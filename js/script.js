document.addEventListener('DOMContentLoaded', () => {
    // Form handling
    const form = document.getElementById('signupForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            // Let Formspree handle it naturally or add custom AJAX here
            // For now, we'll just add a simple visual feedback before submission
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'جاري الإرسال...';
            btn.style.opacity = '0.8';
        });
    }

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
