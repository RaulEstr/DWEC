let arriba = document.getElementById("arriba");
let abajo = document.getElementById("abajo");
let izquierda = document.getElementById("izquierda");
let derecha = document.getElementById("derecha");

let capa = document.getElementById("capa");
capa.style.zIndex = "-1";
const TAMANIO = 50;

arriba.addEventListener("click", ()=>{
    capa.style.top = (parseInt(capa.style.top) - TAMANIO) + "px";
    if(parseInt(capa.style.top) < 0) {
        capa.style.top = "0px";
    }
});

abajo.addEventListener("click", () =>{
    capa.style.top = (parseInt(capa.style.top) + TAMANIO) + "px";
    if(parseInt(capa.style.top) + parseInt(capa.style.height) > screen.availHeight) {
        capa.style.top = screen.availHeight - parseInt(capa.style.height) + "px";
    }
})

izquierda.addEventListener("click", ()=>{
    capa.style.left = (parseInt(capa.style.left) - TAMANIO) + "px";
    if(parseInt(capa.style.left) < 0) {
        capa.style.left = "0px";
    }
});

derecha.addEventListener("click", () =>{
    capa.style.left = (parseInt(capa.style.left) + TAMANIO) + "px";
    if(parseInt(capa.style.left) + parseInt(capa.style.width) > screen.availWidth) {
        capa.style.left = screen.availWidth - parseInt(capa.style.width) + "px";
    }
})