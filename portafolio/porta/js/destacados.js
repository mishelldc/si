import { webs } from "./data_web.js";

let divPaginas = document.querySelector(".contenedor");

webs.forEach((cada_web) => {
    let div_web = document.createElement("div");
    div_web.innerHTML = `
        <a href="${cada_web.githubpage}">
            <img src="${cada_web.img}" alt="">
            <h2 class="titulo">${cada_web.nombre}</h2>
            <p class="descripcion">${cada_web.descripcion}</p>
            <a href="${cada_web.repositorio}" class="github">GitHub</a>
        </a>
    `;
    divPaginas.appendChild(div_web);
});