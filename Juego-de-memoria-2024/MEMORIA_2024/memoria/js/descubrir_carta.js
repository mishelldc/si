
import { Cargar_puntos } from "./Puntos";
import { Actualizar_vidas } from "./actualizar_vidas";
import{vidas} from "./actualizar_vidas"

let todas_las_cartas = document.querySelectorAll(".carta_tracera");
let cartas_descubiertas = [];

todas_las_cartas.forEach((cada_div) => {
    cada_div.addEventListener("click", () => {

                if (carta_1 == carta_2) {
                    contador_de_cartas ++;

                    if (contador_de_cartas == todas_las_cartas.length/2){
                        Cargar_puntos();
                    }
                }

        if (!cada_div.classList.contains("activar") && cartas_descubiertas.length < 2) {
            cada_div.classList.add("activar");
            cartas_descubiertas.push(cada_div);

            if (cartas_descubiertas.length == 2) {
                // Verificar si las cartas seleccionadas forman un par
                if (cartas_descubiertas[0].dataset.valor == cartas_descubiertas[1].dataset.valor) {
                    // Si es un par, eliminar las cartas del juego
                    setTimeout(() => {
                        cartas_descubiertas.forEach((cada_carta_descubierta) => {
                            cada_carta_descubierta.style.visibility = "hidden";
                        });
                        cartas_descubiertas = [];
                    }, 1000);
                } else {
                    // Si no es un par, ocultar las cartas después de un tiempo
                    setTimeout(() => {
                        cartas_descubiertas.forEach((cada_carta_descubierta) => {
                            cada_carta_descubierta.classList.remove("activar");
                        });
                        cartas_descubiertas = [];
                    }, 1000);
                }

                 

        let carta_1 = cartas_descubriertas[0].innerHTML;
        let carta_2 = cartas_descubriertas[1].innerHTML;

        if (carta_1 == carta_2) {
            cartas_descubriertas.forEach((carta) => {
                console.log(carta);
                carta.innerHTML =""
                carta.classList.remove("activar");
                carta.classList.add("ocultar");
            })

        }else{
            console.log("Falso");
            setTimeout(()=>{
                cartas_descubriertas.forEach((cada_carta_descubrierta)=>{
                cada_carta_descubrierta.classList.remove("activar")
                })
            }, 1000);
        }
            }
        }
    });
});