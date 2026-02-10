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
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') && link.getAttribute('href').includes(current)) {
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

if (backToTopButton) {
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
}

// ========================================
// FERMETURE AUTOMATIQUE DU MENU MOBILE
// ========================================
const menuToggle = document.getElementById('menu');
if (menuToggle && typeof bootstrap !== 'undefined') {
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
        toggle: false
    });

    const navLinksMenu = document.querySelectorAll('.nav-link');
    navLinksMenu.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });
}

// ========================================
// ANIMATION DES BARRES DE PROGRESSION
// ========================================
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    if (progressBars.length === 0) return;
    
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateProgressBars);
} else {
    animateProgressBars();
}

// ========================================
// ANIMATION FADE-IN AU SCROLL
// ========================================
const fadeInElements = document.querySelectorAll('.card, .soft-skill-badge, .portfolio-card');

if (fadeInElements.length > 0) {
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
}

// ========================================
// GESTION DU FORMULAIRE DE CONTACT
// ========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name') ? document.getElementById('name').value : '';
        const email = document.getElementById('email') ? document.getElementById('email').value : '';
        const subject = document.getElementById('subject') ? document.getElementById('subject').value : '';
        const message = document.getElementById('message') ? document.getElementById('message').value : '';
        
        if (!name || !email || !subject || !message) {
            showAlert('Veuillez remplir tous les champs', 'danger');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Veuillez entrer une adresse email valide', 'danger');
            return;
        }
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="bi bi-hourglass-split"></i> Envoi en cours...';
        
        setTimeout(() => {
            showAlert('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }, 1500);
    });
}

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
    
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// ========================================
// GESTION DES FORMULAIRES DE FORMATION
// ========================================
const modalInscription = document.getElementById('modalInscription');
if (modalInscription) {
    modalInscription.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        if (button) {
            const formation = button.getAttribute('data-formation');
            const formationInput = document.getElementById('formation-selected');
            const formationDisplay = document.getElementById('formation-name-display');
            
            if (formationInput) formationInput.value = formation;
            if (formationDisplay) formationDisplay.textContent = formation;
        }
    });
}

// Formulaire rapide d'inscription (dans le modal)
const quickForm = document.getElementById('quickInscriptionForm');
if (quickForm) {
    quickForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des valeurs
        const nom = document.getElementById('quick-nom') ? document.getElementById('quick-nom').value : '';
        const email = document.getElementById('quick-email') ? document.getElementById('quick-email').value : '';
        const tel = document.getElementById('quick-tel') ? document.getElementById('quick-tel').value : '';
        
        // Validation
        if (!nom || !email || !tel) {
            showAlert('Veuillez remplir tous les champs obligatoires', 'warning');
            return;
        }
        
        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Veuillez entrer une adresse email valide', 'danger');
            return;
        }
        
        // Simulation d'envoi
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="bi bi-hourglass-split"></i> Envoi en cours...';
        
        setTimeout(() => {
            showAlert('✅ Demande envoyée avec succès ! Nous vous recontacterons dans les 24h.', 'success');
            
            // Fermer le modal
            if (typeof bootstrap !== 'undefined' && modalInscription) {
                const modal = bootstrap.Modal.getInstance(modalInscription);
                if (modal) modal.hide();
            }
            
            // Réinitialiser le formulaire
            this.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }, 1500);
    });
}

// Formulaire principal de demande de devis
const formationForm = document.getElementById('formationForm');
if (formationForm) {
    formationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des valeurs
        const nom = document.getElementById('nom') ? document.getElementById('nom').value : '';
        const telephone = document.getElementById('telephone') ? document.getElementById('telephone').value : '';
        const emailForm = document.getElementById('email-form') ? document.getElementById('email-form').value : '';
        const formationChoisie = document.getElementById('formation-choisie') ? document.getElementById('formation-choisie').value : '';
        const typeFormation = document.getElementById('type-formation') ? document.getElementById('type-formation').value : '';
        
        // Validation
        if (!nom || !telephone || !emailForm || !formationChoisie || !typeFormation) {
            showAlert('Veuillez remplir tous les champs obligatoires (*)', 'warning');
            return;
        }
        
        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailForm)) {
            showAlert('Veuillez entrer une adresse email valide', 'danger');
            return;
        }
        
        // Simulation d'envoi
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="bi bi-hourglass-split"></i> Envoi en cours...';
        
        setTimeout(() => {
            showAlert('✅ Demande de devis envoyée avec succès ! Nous vous recontacterons dans les 24h pour discuter de votre projet.', 'success');
            
            // Réinitialiser le formulaire
            this.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }, 1500);
    });
}

// ========================================
// SMOOTH SCROLL POUR LES LIENS INTERNES
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (!href || href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// ========================================
// LOG DE BIENVENUE
// ========================================
console.log('%c👋 Bienvenue sur mon portfolio!', 
    'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c✅ Portfolio JavaScript chargé avec succès', 'color: green; font-weight: bold;');
