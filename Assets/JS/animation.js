

// Exemple : survol des lignes du tableau
const tableRows = document.querySelectorAll('#expense-list tr');
tableRows.forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = '#f0f8ff';
    });
    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = '';
    });
});
// Récupérer tous les liens de navigation
const navLinks = document.querySelectorAll('.nav-links li a');

// Boucler sur chaque lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Enlever la classe active de tous les liens
    navLinks.forEach(l => l.classList.remove('active'));
    
    // Ajouter la classe active uniquement sur le lien cliqué
    link.classList.add('active');
  });
});
// Exemple : animation au clic sur le bouton de chat
const chatButton = document.getElementById('chat-btn');
chatButton.addEventListener('click', () => {
    chatButton.classList.add('clicked');
    setTimeout(() => {
        chatButton.classList.remove('clicked');
    }, 300);
});
// ==================== Switch Login/Register ====================
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

// Montrer inscription
showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});

// Montrer connexion
showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});
// ==================== Animations pour les formulaires ====================
const inputs = document.querySelectorAll('.form-input input, .form-input select');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
        if(input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
});
// Bouton Login dans la navbar
const navLogin = document.getElementById('nav-login');
const loginSection = document.getElementById('login-section');

// Clique sur le bouton => afficher/masquer la section Login
navLogin.addEventListener('click', (e) => {
  e.preventDefault();

  if (loginSection.classList.contains('hidden')) {
    loginSection.classList.remove('hidden'); // afficher
    loginSection.scrollIntoView({ behavior: "smooth" }); // scroll fluide
  } else {
    loginSection.classList.add('hidden'); // masquer
  }
});

// ==================== Animations pour les boutons ====================
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hovered');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('hovered');
    });
});
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('pressed');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('pressed');
    });
});
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 200);
    });
});


