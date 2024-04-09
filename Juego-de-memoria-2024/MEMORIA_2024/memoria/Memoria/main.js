// cartas
let cards1 = ["🛸","👽","📡","☄️","🪐","🔭","👾","🌌","👩🏻‍🚀","🌃","⭐","🌑"]
let cards2 = ["🛸","👽","📡","☄️","🪐","🔭","👾","🌌","👩🏻‍🚀","🌃","⭐","🌑"]
let todas_las_tarjtas = cards1.concat(cards2);

function repartir_cartas() {
    let tablero = document.querySelector("#root"); // hacer vinculo con elemento del dom
    
    todas_las_tarjtas.forEach((cada_carta)=> {  // foreach muestra un elemento 
      let cart = document.createElement("div");

      cart.innerHTML = `<div class="carta">${cada_carta}</div>` // que le inserte html  // que coloque cada carta

      tablero.appendChild(cart); //agregar un elemento hijo al div pero para agregarlo tieene que ser un elemento 
    })
}

repartir_cartas();