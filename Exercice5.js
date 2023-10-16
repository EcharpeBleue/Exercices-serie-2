let x = prompt(`Veuillez saisir un premier nombre.`)
let y = prompt(`Veuillez saisir un deuxième nombre.`)
const paragraphe = "paragraphe"
if (x>y) {
    let paragraphe = document.getElementById("p1"); // récupérer l'élement HTML
    paragraphe.innerHTML="Le premier numéro est plus grand que le second";// modifier la propriété innerHTML
}
else {
    let paragraphe = document.getElementById("p1"); // récupérer l'élement HTML
    paragraphe.innerHTML="Le deuxième numéro est plus grand que le premier";// modifier la propriété innerHTML
}