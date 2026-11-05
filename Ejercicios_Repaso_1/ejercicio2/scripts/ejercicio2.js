const nombres = ["Ana", "Andrés", "Beatriz", "Carlos", "Carmen", "Daniel", "David", "Elena", "Fernando", "Lucía"];

let texto = document.getElementById("texto");
let lista = document.getElementById("lista");

nombres.forEach(nombre => {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
});

texto.addEventListener("input", (event)=> {
    let lis = lista.children;
    
    for(let i = 0; i < lis.length; i++) {
        if(texto.value.toLowerCase().search(lis[i].textContent.toLowerCase()) != -1) {
            
            lis[i].classList.add = "oculto";
        }
        else {

        }
    }

    // nombres.forEach(nombre => {
    //     if(texto.value.toLowerCase().search(nombre.toLowerCase()) != -1) {
    //         let li = document.createElement("li");
    //         li.textContent = nombre;
    //         lista.appendChild(li);
    //     }
    // });
});
