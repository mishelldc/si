import { lista_random } from "./Data_cartas.js"
let todas_las_tarjetas = lista_random;

function repartir_carta(){
   let tablero = document.querySelector("#root");
   
   todas_las_tarjetas.forEach((cada_carta)=> {
      let carta = document.createElement("div")
      carta.classList.add("carta_tracera")
   carta.innerHTML = `<div class="carta_fontral">${cada_carta}</div>`

   tablero.appendChild(carta);})
}

repartir_carta();