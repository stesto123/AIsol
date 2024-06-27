// scripts.js

// Inizializzazione di GSAP e ScrollTrigger
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animazione della sezione "hero"
    gsap.from('.hero-content', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power1.out'
    });

    // Animazione delle sezioni con la classe "scroll-section"
    document.querySelectorAll('.scroll-section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%', // Quando l'animazione dovrebbe iniziare
                end: 'bottom 20%', // Quando l'animazione dovrebbe finire
                toggleActions: 'play none none none', // Azioni su start, end, leave e enter
            },
            duration: 1,
            opacity: 0,
            y: 50,
            ease: 'power1.out'
        });
    });
});
