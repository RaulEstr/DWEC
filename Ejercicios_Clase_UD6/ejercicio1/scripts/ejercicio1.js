let boton = document.getElementById("boton");
let contador = document.getElementById("contador");

let numClicks = 0;

// FORMA 1
boton.addEventListener("click", (event) => {
    event.preventDefault();
    numClicks++;
    contador.innerHTML = numClicks;
});

// FORMA 2
// boton.onclick = miFunc;

// FORMA 3
// boton.addEventListener("click", miFunc);

// function miFunc(event) {
//     event.preventDefault();
//     numClicks++;
//     contador.innerHTML = numClicks;
// }

// FORMA 4
// boton.onclick = (event) => {
//     event.preventDefault();
//     numClicks++;
//     contador.innerHTML = numClicks;
// };