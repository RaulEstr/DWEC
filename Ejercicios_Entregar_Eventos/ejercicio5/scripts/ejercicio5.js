// Cojo las referencia del cuadrado y del body
let body = document.body;
let cuadrado = document.getElementById("cuadrado");

// Le añado al body un evento al pulsar teclas que si la tecla corresponde con alguna de las flcehas mueve el duadrado en
// la direccion correspondiente
body.addEventListener("keydown", (event)=> {
    if(event.key == "ArrowUp") {
        cuadrado.style.top = parseInt(cuadrado.style.top) - 10 + "px";
    }
    else if(event.key == "ArrowDown") {
        cuadrado.style.top = parseInt(cuadrado.style.top) + 10 + "px";
    }
    else if(event.key == "ArrowLeft") {
        cuadrado.style.left = parseInt(cuadrado.style.left) - 10 + "px";
    }
    else if(event.key == "ArrowRight") {
         cuadrado.style.left = parseInt(cuadrado.style.left) + 10 + "px";
    }
})