let x = prompt(`Veuillez saisir un premier nombre.`)
let y = prompt(`Veuillez saisir un deuxième nombre.`)
let paragraphe = document.getElementById("p1"); // récupérer l'élement HTML
if (x>y) 
{
    paragraphe.innerHTML="Le premier numéro est plus grand que le second";// modifier la propriété innerHTML
}
else 
{
    paragraphe.innerHTML="Le deuxième numéro est plus grand que le premier";// modifier la propriété innerHTML
}