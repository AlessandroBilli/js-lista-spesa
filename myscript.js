'use strict'

let listaSpesa = [
    "Pane",
    "Pollo",
    "banana",
    "Broccoli",
    "Riso",
    "Uova",
    "Latte",
    "Fagioli",
    "Tonno",
    "Pasta"
];

const listaSpesaUl = document.getElementById('listaSpesaUl');
let indice = 0;

let listaHTML = "";

while (indice < listaSpesa.length) {
    listaHTML += `<li class="prodotti">${listaSpesa[indice]}</li>`;
    indice++;
}

listaSpesaUl.innerHTML = listaHTML;

