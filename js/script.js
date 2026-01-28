// ========================================
// NAVBAR ACTIF AU SCROLL
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
});

// ========================================
// BOUTON RETOUR EN HAUT
// ========================================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// FERMETURE AUTOMATIQUE DU MENU MOBILE
// ========================================
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menu');
const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            bsCollapse.hide();
        }
    });
});

// ========================================
// ANIMATION DES BARRES DE PROGRESSION
// ========================================
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0';
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 100);
                
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    progressBars.forEach(bar => observer.observe(bar));
}

animateProgressBars();

// ========================================
// ANIMATION FADE-IN AU SCROLL
// ========================================
const fadeInElements = document.querySelectorAll('.card, .skill-badge, .portfolio-item');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                });
            }, index * 100);
            
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeInElements.forEach(el => fadeInObserver.observe(el));

// ========================================
// GESTION DU FORMULAIRE DE CONTACT
// ========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des valeurs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validation basique
        if (!name || !email || !subject || !message) {
            showAlert('Veuillez remplir tous les champs', 'danger');
            return;
        }
        
        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Veuillez entrer une adresse email valide', 'danger');
            return;
        }
        
        // Simulation d'envoi (à remplacer par une vraie requête)
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="bi bi-hourglass-split"></i> Envoi en cours...';
        
        // Simuler un délai d'envoi
        setTimeout(() => {
            showAlert('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }, 1500);
    });
}

// Fonction pour afficher les alertes
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`;
    alertDiv.style.zIndex = '9999';
    alertDiv.style.maxWidth = '500px';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Suppression automatique après 5 secondes
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// ========================================
// EFFET DE PARALLAXE LÉGER SUR LE HERO
// ========================================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        hero.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
});

// ========================================
// COMPTEUR ANIMÉ (si vous ajoutez des statistiques)
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// EFFET DE FRAPPE (TYPING EFFECT)
// ========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Exemple d'utilisation (optionnel)
// const heroTitle = document.querySelector('.hero h1');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 100);
// }

// ========================================
// DÉTECTION DU THÈME SOMBRE DU SYSTÈME
// ========================================
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // L'utilisateur préfère le mode sombre
    // Vous pouvez ajouter une classe pour un thème sombre
    // document.body.classList.add('dark-theme');
}

// ========================================
// PRÉCHARGEMENT DES IMAGES (si nécessaire)
// ========================================
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Exemple:
// preloadImages([
//     'images/portfolio1.jpg',
//     'images/portfolio2.jpg'
// ]);

// ========================================
// SMOOTH SCROLL POUR LES NAVIGATEURS ANCIENS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignore les liens qui ne pointent que vers #
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// GESTION DE LA NAVIGATION COLLANTE
// ========================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll vers le bas
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll vers le haut
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// LAZY LOADING DES IMAGES (si vous en ajoutez)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// AFFICHAGE DU TEMPS DE CHARGEMENT (DEBUG)
// ========================================
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                     window.performance.timing.navigationStart;
    console.log(`Page chargée en ${loadTime}ms`);
});

// ========================================
// EASTER EGG - KONAMI CODE (optionnel et amusant!)
// ========================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                       'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        // Activation de l'easter egg
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// ========================================
// PROTECTION CONTRE LE CLIC DROIT (optionnel)
// ========================================
// Décommenter si vous voulez désactiver le clic droit
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });

// ========================================
// LOG DE BIENVENUE DANS LA CONSOLE
// ========================================
console.log('%c👋 Bienvenue sur mon portfolio!', 
    'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cSi vous êtes ici, c\'est que vous aimez coder 😊', 
    'color: #764ba2; font-size: 14px;');
console.log('%cN\'hésitez pas à me contacter!', 
    'color: #333; font-size: 12px;');

// ========================================
// EXPORT DES FONCTIONS UTILES
// ========================================
window.portfolioUtils = {
    showAlert,
    animateCounter,
    typeWriter,
    preloadImages
};
