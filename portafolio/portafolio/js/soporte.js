import {lista_soporte_tecnico} from "./data_tecnico.js"
let div_soporte = document.querySelector(".soporte");

lista_soporte_tecnico.array.forEach((cada_categoria) => {
    let div = document.createComment("div");

    div.innerHTML =`
    <img src ="${cada_categoria.img}" alt="">
    <h2> ${cada_categoria.nombre}</h2>
    <span>${cada_categoria.cantidad}</span>
    <div class="div_categoria">
    `;
    div_soporte.appendChild(div);

});