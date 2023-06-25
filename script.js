
// on va faire la fonction add pour chaque click

var btnplus = document.querySelectorAll(".achat")

function add (elem){

    var cible = elem.target;
    var parent = cible.parentElement // le parent est notre noeud
    var quantite = Number(parent.querySelector("span").innerHTML) // on prend le nombre du span car il est de nature un string , donc on ajoute number
    quantite++
    parent.querySelector("span").innerHTML = quantite // le contenu du span doit etre remplacé par la qtte modifié 
    


     var prix = Number(parent.querySelector(".prixunit").innerHTML)
     var total  = Number(parent.querySelector(".total").innerHTML)
     total =  quantite * prix 
     parent.querySelector(".total").value = total // on doit changer 'value' dde la classe total

     totalsum ();


}



for ( let i=0 ; i<btnplus.length ; i++)
{
btnplus[i].addEventListener("click",add)

}

// Maintenant on va faire le meme procedure mais pour annuler l'achat 


var btnminus = document.querySelectorAll(".annulation")

function del (elem) {
    var cible = elem.target
    var parent = cible.parentElement
    var quantite = Number(parent.querySelector("span").innerHTML)
    if (quantite > 0)

   {quantite --} 
   parent.querySelector("span").innerHTML = quantite
   var prix = Number(parent.querySelector(".prixunit").innerHTML)
   var total  = Number(parent.querySelector(".total").innerHTML)
   total =  quantite * prix 
   parent.querySelector(".total").value = total
   totalsum ()



}

for (let i = 0; i < btnminus.length; i++)
 {
  
btnminus[i].addEventListener("click",del) }

// donc on faire une fonction qui calcule le montant total

var totals = document.querySelectorAll(".total");

function totalsum() {
  let somme = 0;

  for (let i = 0; i < totals.length; i++) {
    somme += Number(totals[i].value);
  }

  document.querySelector(".sum").value = somme;
}

// Maintenant on doit supprimer un article 

var btndel = document.querySelectorAll(".supprimer")

for (let i = 0; i < btndel.length; i++) {
    btndel[i].addEventListener("click",supp)
    
}

function supp (elem) {
    var cible = elem.target
    var parent = cible.parentElement
    parent.querySelector(".total").value = 0 // quand on supprime un article on elimine leur prix du montant total
    totalsum()
    parent.remove()

}

// Les evenements de j'adore 

var btnadore = document.querySelectorAll(".coeur")

function adore (elem) {
    var cible = elem.target
    if (cible.style.color === "red") { cible.style.color = "#000000" ;}
    else {cible.style.color = "red"}
}

// le bouton soit noir soit rouge 

for (let i = 0; i < btnadore.length; i++) {
    btnadore[i].addEventListener("click",adore);
    
}
