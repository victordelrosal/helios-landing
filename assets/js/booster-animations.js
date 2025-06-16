// Booster Pack Animations
document.addEventListener('DOMContentLoaded', function() {
    // Create sparkle elements for the booster section
    const boosterSection = document.querySelector('.booster-pack-section');
    if (boosterSection) {
        // Add random floating particles
        for (let i = 0; i < 20; i++) {
            createParticle(boosterSection);
        }
        
        // Add hover effects to resource items
        const resourceItems = document.querySelectorAll('.resource-item');
        resourceItems.forEach((item, index) => {
            // Staggered entrance animation
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 * index);
            
            // Add highlight effect on hover
            item.addEventListener('mouseenter', function() {
                // Highlight this item
                this.style.zIndex = '10';
                
                // Dim other items slightly
                resourceItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.style.opacity = '0.7';
                    }
                });
            });
            
            // Reset on mouse leave
            item.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
                resourceItems.forEach(otherItem => {
                    otherItem.style.opacity = '1';
                });
            });
        });
    }
    
    // Intersection Observer for scrolling animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-boost');
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.2});
    
    // Observe the booster section
    if (boosterSection) {
        observer.observe(boosterSection);
    }
});

// Create a single particle element
function createParticle(parent) {
    const particle = document.createElement('div');
    particle.className = 'booster-particle';
    
    // Random position, size and animation duration
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    // Add to parent
    parent.appendChild(particle);
    
    return particle;
}

// Add scroll-triggered animation when the booster section comes into view
window.addEventListener('scroll', function() {
    const boosterSection = document.querySelector('.booster-pack-section');
    if (!boosterSection) return;
    
    const sectionTop = boosterSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
        boosterSection.classList.add('boost-activated');
    }
});
