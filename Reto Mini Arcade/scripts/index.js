function Jugador() {
    this.victoriasTragaperras = 0;
    this.victoriasPPT = 0;
    this.victoriasAdivina = 0;
}


let ventana;
// Funcion que abre juego dependiendo del numero que se le pase como parametro (desde el HTML). Si ya hay un juego abierto, lo avisa
function cargarJuego(num) {
    if(!ventana || ventana.closed) {
        switch (num) {
            case 1:
                ventana = window.open("./Tragaperras/tragaperras.html", "", "width=800,height=400");
            break;
            case 2:
                ventana = window.open("./PPT/ppt.html", "", "width=800,height=400");
            break;     
            case 3:
                ventana = window.open("./AdivinaNumero/AdivinaNumero.html", "", "width=800,height=400");
            break;
        }
    }
    else {
        alert("Ya hay un juego abierto");
    }
}