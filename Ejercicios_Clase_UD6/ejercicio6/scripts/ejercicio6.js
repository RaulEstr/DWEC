// Cojo la referencia de la imagen
let imagen = document.getElementById("img");

// Le añado los eventos
imagen.addEventListener("mouseover", cambiarImagen);
imagen.addEventListener("mouseout", cambiarImagen);

// Funcion que alterna el atributo src de la imagen
function cambiarImagen() {
    if(imagen.getAttribute("src") == "imgs/img1.jpg") {
        imagen.setAttribute("src", "imgs/img2.jpg");
    }
    else {
        imagen.setAttribute("src", "imgs/img1.jpg");
    }
}