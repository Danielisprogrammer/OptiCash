 // Chat IA frontend

const chatBtn = document.getElementById('chat-btn');
const chatContainer = document.getElementById('chat-container');
const chatClose = document.getElementById('chat-close');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

// Ouvrir le chat
chatBtn.addEventListener('click', () => {
    chatContainer.classList.toggle('hidden');
    chatInput.focus();
});

// Fermer le chat
chatClose.addEventListener('click', () => {
    chatContainer.classList.add('hidden');
});

// Envoyer un message
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if(userMsg === '') return;

    // Afficher le message de l'utilisateur
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-msg');
    userDiv.innerHTML = `<span>${userMsg}</span>`;
    chatMessages.appendChild(userDiv);

    // Afficher "IA" (pour l'instant réponse statique)
    const aiDiv = document.createElement('div');
    aiDiv.classList.add('ai-msg');
    aiDiv.innerHTML = `<span>IA: Message reçu!🚀</span>`;
    chatMessages.appendChild(aiDiv);

    // Scroll vers le bas
    chatMessages.scrollTop = chatMessages.scrollHeight;

    chatInput.value = '';
});
