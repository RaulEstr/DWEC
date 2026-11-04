let aumentar = document.getElementById("aumentar");
let disminuir = document.getElementById("disminuir");
let capa = document.getElementById("capa")
const TAMANIO = 50;

aumentar.addEventListener("click", ()=>{
    capa.style.height = (parseInt(capa.style.height) + TAMANIO) + "px";
    capa.style.width = (parseInt(capa.style.width) + TAMANIO) + "px";
});

disminuir.addEventListener("click", () =>{
    capa.style.height = (parseInt(capa.style.height) - TAMANIO) + "px";
    capa.style.width = (parseInt(capa.style.width) - TAMANIO) + "px";
})