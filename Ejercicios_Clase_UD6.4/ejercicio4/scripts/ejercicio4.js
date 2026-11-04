let rango = document.getElementById("rango");
let imagen = document.getElementById("imagen");

rango.addEventListener("change", () => {
    imagen.style.opacity = rango.value;
})