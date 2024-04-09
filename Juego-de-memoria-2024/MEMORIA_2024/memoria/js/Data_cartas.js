let cards1 = ["🚀","🏍️","🚛","🚌","🚗","🚓","🚕","🚑","🛻","🛺","🛸","🛩️" ];
let cards2 = ["🚀","🏍️","🚛","🚌","🚗","🚓","🚕","🚑","🛻","🛺","🛸","🛩️" ];

// funcion para crear las cartas aletoreamente
function ordenarAleatorio(a, b){
    return Math.random() -0.5;
}

// uificar las listas
let todas_las_tarjetas = cards1.concat(cards2);

// orgsnizar de forma aletaorea
todas_las_tarjetas.sort(ordenarAleatorio);
