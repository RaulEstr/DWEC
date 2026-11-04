let capa = document.getElementById("capa");
let capa2 = document.getElementById("capa2");
let texto = document.getElementById("texto");

texto.addEventListener("mouseover", ()=> {
    capa.style.display = "block";
    capa2.style.visibility = "visible";
});

texto.addEventListener("mouseout", ()=> {
    capa.style.display = "none";
    capa2.style.visibility = "hidden";
});