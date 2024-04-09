import { cuadro_del_lado } from "./ladocuadro.js";
import { header } from "./header_component.js";

let coso = document.querySelector(".root"); // conexion

function cargardiv (){
        coso.innerHTML = `

        <div class="header">${header}</div>
        <div class="cuadro_del_lado">${cuadro_del_lado}</div>
        <div class="contenedor"></div>
        <div class="soporte"></div>
`;
}
cargardiv();

