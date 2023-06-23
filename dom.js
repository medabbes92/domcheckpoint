// Récupérer tous les éléments contenant des boutons + et - ainsi que le champ total
const quantitePlus = document.querySelectorAll('.achat');
const quantiteMoins = document.querySelectorAll('.annulation');
const boutonSupprimer = document.querySelectorAll('.supprimer');
const boutonJadore = document.querySelectorAll('.coeur');
const champsTotal = document.querySelectorAll('.total');
const champMontantTotal = document.getElementById('sum');


// var prix=[2000 , 1 , 600 , 500] on peut utiliser ce tableau pour identifier les prix de chaque article mais j'ai trouvé
// une autre solution

// Ajouter des gestionnaires d'événements pour les boutons +
quantitePlus.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let counter = btn.parentNode.querySelector('.counter');
    let total = btn.parentNode.querySelector('.total');
    let prix = parseFloat(btn.parentNode.querySelector('p:nth-child(4)').textContent);
    let quantite = parseInt(counter.textContent);

    quantite++;

    counter.textContent = quantite;
    total.value = quantite * prix;

    calculateTotal();
  });
});

// Ajouter des gestionnaires d'événements pour les boutons -
quantiteMoins.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let counter = btn.parentNode.querySelector('.counter');
    let total = btn.parentNode.querySelector('.total');
    let prix = parseFloat(btn.parentNode.querySelector('p:nth-child(4)').textContent);
    let quantite = parseInt(counter.textContent);

    if (quantite > 0) {
      quantite--;
    }

    counter.textContent = quantite;
    total.value = quantite * prix;

    calculateTotal();
  });
});

// Ajouter des gestionnaires d'événements pour les boutons de suppression
boutonSupprimer.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const article = btn.parentNode;
    article.parentNode.removeChild(article);

    calculateTotal();
  });
});

// Ajouter des gestionnaires d'événements pour les boutons "J'adore"
boutonJadore.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('red');
  });
});

// Fonction pour calculer le montant total
function calculateTotal() {
  let sum = 0;

  champsTotal.forEach((champ) => {
    sum += parseFloat(champ.value);
  });

  champMontantTotal.value = sum;
}

// Calculer le montant total initial au chargement de la page
calculateTotal();
