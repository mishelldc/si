import { cuadroLateral } from "./ladocuadro.js";
import { header } from "./header.js";

let divs = document.querySelector (".root")
function cargarDiv (){
    divs.innerHTML = `

    <div class="header">${header}</div>
    <div class="cuadroLateral">${cuadroLateral}</div>
    <div class="contenedor"></div>

    `;
}
cargarDiv();