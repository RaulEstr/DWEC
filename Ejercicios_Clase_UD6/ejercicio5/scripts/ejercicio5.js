// Referencias al input y al numero del contador
let input = document.getElementById("input");
let contador = document.getElementById("contador");
let cuantos = 0;

// Añado el evento
//input.addEventListener("keyup", actualizarContador2);
input.addEventListener("input", actualizarContador3);

// Metodo 1, Funcion que actualiza el contador dependiendo del length del texto del input
function actualizarContador(event) {
    let texto = event.target.value;
    texto = texto.replace(" ", "");
    texto = texto.replace("\n", "");
    contador.innerHTML = texto.length;
}

// Metodo 2, funcion que actualiza el contador dependiendo de los valores ascii del keyup
// Sigue bajando el contador aunque no haya
function actualizarContador2(event) {
    if((event.keyCode >= 65 && event.keyCode <= 122) || event.keyCode == 209 || event.keyCode == 241) {
        cuantos++;
    }
    if(event.key == "Backspace") {
        cuantos--;
    }

    contador.innerHTML = cuantos;
}

// Metodo 3
function actualizarContador3(event) {
    let texto = event.target.value;
    texto = texto.replace(" ", "");
    texto = texto.replace("\n", "");
    contador.innerHTML = texto.length;
}