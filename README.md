# Portfolio Professionnel - Hawa Kaboré


## Structure des fichiers

```
portfolio/
│
├── index.html              # Page principale
├── css/
│   └── style.css          # Styles personnalisés
├── js/
│   └── script.js          # Scripts JavaScript
└── README.md              # Documentation
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec animations
- **JavaScript (ES6+)** - Interactivité
- **Bootstrap 5.3.2** - Framework CSS responsive
- **Bootstrap Icons** - Icônes vectorielles

## Installation et utilisation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un éditeur de code (VS Code, Sublime Text, etc.)
- Optionnel : Un serveur local (Live Server, XAMPP, etc.)

### Installation

1. **Téléchargez tous les fichiers** dans un dossier de votre choix

2. **Organisez les fichiers** selon la structure ci-dessus :
   ```
   /votre-dossier
   ├── index.html
   ├── css/
   │   └── style.css
   └── js/
       └── script.js
   ```

3. **Ouvrez index.html** dans votre navigateur
   - Double-cliquez sur le fichier
   - Ou faites clic droit → "Ouvrir avec" → Votre navigateur

### Utilisation avec un serveur local (recommandé)

**Avec VS Code et Live Server :**
1. Installez l'extension "Live Server"
2. Clic droit sur index.html → "Open with Live Server"

**Avec Python :**
```bash
# Python 3
python -m http.server 8000

# Puis ouvrez http://localhost:8000 dans votre navigateur
```

## Personnalisation

### 1. Informations personnelles

Dans `index.html`, modifiez :

```html
<!-- Nom et titre -->
<h1>Votre Nom</h1>
<p class="lead">Votre Titre Professionnel</p>

<!-- Email -->
<a href="mailto:votre.email@example.com">votre.email@example.com</a>

<!-- Téléphone -->
<a href="tel:+22900000000">+229 XX XX XX XX</a>

<!-- Localisation -->
<span>Votre Ville, Pays</span>
```

### 2. Réseaux sociaux

Remplacez les `#` par vos vrais liens :

```html
<a href="https://linkedin.com/in/votre-profil" class="btn btn-outline-light btn-lg me-2">
    <i class="bi bi-linkedin"></i>
</a>
<a href="https://facebook.com/votre-profil" class="btn btn-outline-light btn-lg me-2">
    <i class="bi bi-facebook"></i>
</a>
<a href="https://github.com/votre-profil" class="btn btn-outline-light btn-lg me-2">
    <i class="bi bi-github"></i>
</a>
```

### 3. Couleurs du thème

Dans `css/style.css`, modifiez les variables CSS :

```css
:root {
    --primary-color: #667eea;      /* Couleur principale */
    --secondary-color: #764ba2;    /* Couleur secondaire */
    --accent-color: #f093fb;       /* Couleur d'accent */
    --dark-color: #1a1a2e;         /* Couleur sombre */
}
```

### 4. Services offerts

Modifiez le contenu des cartes dans la section `#services` :

```html
<div class="col-md-4">
    <div class="card h-100 text-center p-4 border-0 shadow-sm">
        <div class="card-icon mb-3">
            <i class="bi bi-votre-icone display-4 text-primary"></i>
        </div>
        <h5 class="card-title mb-3">Votre Service</h5>
        <p class="card-text">Description de votre service...</p>
        <ul class="list-unstyled text-start mt-3">
            <li><i class="bi bi-check-circle text-success me-2"></i>Point 1</li>
            <li><i class="bi bi-check-circle text-success me-2"></i>Point 2</li>
        </ul>
    </div>
</div>
```

### 5. Compétences techniques

Ajoutez vos compétences dans la section `#skills` :

```html
<div class="col-6 col-md-4 col-lg-2">
    <div class="skill-badge text-center p-3">
        <i class="bi bi-votre-icone display-6 text-danger"></i>
        <p class="mt-2 mb-0 fw-semibold">Nom Compétence</p>
    </div>
</div>
```

Modifiez les barres de progression :

```html
<div class="col-lg-6 mb-4">
    <h5>Nom de la compétence</h5>
    <div class="progress" style="height: 25px;">
        <div class="progress-bar bg-primary" style="width: 90%;">90%</div>
    </div>
</div>
```

### 6. Portfolio / Projets

Ajoutez vos projets dans la section `#portfolio` :

```html
<div class="col-md-6 col-lg-4">
    <div class="portfolio-item card border-0 shadow-sm overflow-hidden">
        <div class="portfolio-overlay">
            <i class="bi bi-votre-icone display-1 text-white"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Nom du Projet</h5>
            <p class="card-text">Description du projet</p>
        </div>
    </div>
</div>
```

## Icônes Bootstrap

Liste des icônes les plus utilisées :

- `bi-laptop` - Ordinateur
- `bi-phone` - Téléphone
- `bi-envelope` - Email
- `bi-geo-alt` - Localisation
- `bi-linkedin` - LinkedIn
- `bi-facebook` - Facebook
- `bi-github` - GitHub
- `bi-twitter` - Twitter
- `bi-instagram` - Instagram

Voir toutes les icônes : https://icons.getbootstrap.com/

## Fonctionnalités JavaScript

### Formulaire de contact

Le formulaire est actuellement configuré en mode simulation. Pour l'intégrer avec un vrai backend :

```javascript
// Dans js/script.js, remplacez la section du formulaire par :
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    try {
        const response = await fetch('votre-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            showAlert('Message envoyé avec succès !', 'success');
            contactForm.reset();
        }
    } catch (error) {
        showAlert('Erreur lors de l\'envoi du message', 'danger');
    }
});
```

### Services de formulaire recommandés

- **Formspree** : https://formspree.io/
- **EmailJS** : https://www.emailjs.com/
- **Netlify Forms** : https://www.netlify.com/products/forms/

## Déploiement

### GitHub Pages

1. Créez un compte GitHub
2. Créez un nouveau repository
3. Uploadez tous vos fichiers
4. Allez dans Settings → Pages
5. Sélectionnez la branche main
6. Votre site sera disponible à : `https://votre-username.github.io/nom-repo`

### Netlify

1. Créez un compte sur Netlify
2. Glissez-déposez votre dossier
3. Votre site est en ligne !

### Vercel

1. Créez un compte sur Vercel
2. Importez votre projet
3. Déployez automatiquement

## Compatibilité

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari
- Chrome Mobile

## ⚡ Optimisations

### Pour améliorer les performances :

1. **Minifiez le CSS et JS** avant la mise en production
2. **Optimisez les images** avec TinyPNG ou ImageOptim
3. **Utilisez un CDN** pour Bootstrap et les icônes
4. **Activez la compression GZIP** sur votre serveur
5. **Ajoutez un cache browser**

##  Support et problèmes courants

### Le menu ne se ferme pas sur mobile
Vérifiez que Bootstrap JS est bien chargé avant votre script.js

### Les animations ne fonctionnent pas
Vérifiez que le fichier CSS est correctement lié et que le chemin est correct.

### Le formulaire ne s'envoie pas
C'est normal ! Configurez un service backend ou utilisez un service tiers comme Formspree.

## Ressources utiles

- [Documentation Bootstrap](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [W3C Validator](https://validator.w3.org/)


Pour toute question ou suggestion d'amélioration, n'hésitez pas à me contacter !

