// Récupérer les éléments DOM
const achatBtns = document.querySelectorAll('.achat');
const annulationBtns = document.querySelectorAll('.annulation');
const coeurBtns = document.querySelectorAll('.coeur');
const deleteBtns = document.querySelectorAll('.x');
const totalInput = document.getElementById('totalfin');

// Ajouter des écouteurs d'événements aux boutons d'achat
achatBtns.forEach((btn) => {
  btn.addEventListener('click', augmenterQuantite);
});

// Ajouter des écouteurs d'événements aux boutons d'annulation
annulationBtns.forEach((btn) => {
  btn.addEventListener('click', diminuerQuantite);
});

// Ajouter des écouteurs d'événements aux boutons de cœur
coeurBtns.forEach((btn) => {
  btn.addEventListener('click', changerCouleurCoeur);
});

// Ajouter des écouteurs d'événements aux boutons de suppression
deleteBtns.forEach((btn) => {
  btn.addEventListener('click', supprimerElement);
});

// Augmenter la quantité d'un élément
function augmenterQuantite(event) {
  const parentElement = event.target.parentNode;
  const quantiteInput = parentElement.querySelector('.total');
  const currentQuantite = parseInt(quantiteInput.value);
  quantiteInput.value = currentQuantite + 1;
  calculerTotal();
}

// Diminuer la quantité d'un élément
function diminuerQuantite(event) {
  const parentElement = event.target.parentNode;
  const quantiteInput = parentElement.querySelector('.total');
  const currentQuantite = parseInt(quantiteInput.value);
  if (currentQuantite > 0) {
    quantiteInput.value = currentQuantite - 1;
    calculerTotal();
  }
}

// Changer la couleur du cœur
function changerCouleurCoeur(event) {
  const coeurBtn = event.target;
  coeurBtn.classList.toggle('liked');
}

// Supprimer un élément
function supprimerElement(event) {
  const parentElement = event.target.parentNode;
  parentElement.parentNode.removeChild(parentElement);
  calculerTotal();
}

// Calculer le montant total
function calculerTotal() {
  let total = 0;
  const inputs = document.querySelectorAll('.total');
  inputs.forEach((input) => {
    total += parseInt(input.value);
  });
  totalInput.value = total;
}
