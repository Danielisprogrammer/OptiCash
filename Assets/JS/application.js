// app.js

// Récupérer les éléments
const form = document.getElementById('form');
const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');
const categoryInput = document.getElementById('category');
const timeInput = document.getElementById('time')
const expenseList = document.getElementById('expense-list');
const totalEl = document.getElementById('total');

// Charger les dépenses depuis LocalStorage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Fonction pour afficher les dépenses
function displayExpenses() {
    expenseList.innerHTML = '';
    let total = 0;
    expenses.forEach(exp => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="border p-2">${exp.title}</td>
            <td class="border p-2">${exp.amount}</td>
            <td class="border p-2">${exp.date}</td>
            <td class="border p-2">${exp.category}</td>
            <td class="border p-2">${exp.time}</td>
        `;
        expenseList.appendChild(tr);
        total += Number(exp.amount);
    });
    totalEl.textContent = total;
}

// Ajouter dépense
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newExpense = {
        id: Date.now(),
        title: titleInput.value,
        amount: amountInput.value,
        date: dateInput.value,
        category: categoryInput.value,
        time: timeInput.ariaValueNow,
    };
    expenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
    form.reset();
});

// Afficher au chargement
displayExpenses();
