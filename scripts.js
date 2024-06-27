// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.benefits, .features, .testimonials, .final-cta, .benefit-card, .feature, .testimonial').forEach(section => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 1.5
        });
    });
});
