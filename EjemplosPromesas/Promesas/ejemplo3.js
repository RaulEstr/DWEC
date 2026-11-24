const boton=document.getElementById("boton");

function comprobarNumero(numero){
    return(new Promise((resolve,reject)=>{
        const valorAleatorio = Math.ceil(Math.random()*10);
        console.log(valorAleatorio);
        console.log(numero);

        if(valorAleatorio==numero){
            setTimeout(()=>{
                resolve(numero+" coincide");
            },1000);
            
        }else{
            setTimeout(()=>{
                reject(numero+" no coincide");
            },1000);
        }
    }))
}

boton.addEventListener("click", (event) => {
    event.preventDefault();
    const numero=document.getElementById("numero");

    comprobarNumero(numero.value)
        .then((valor)=>{
            console.log(valor);
            console.log("Has ganado");
        })
        .catch((error)=>{
            console.log(error);
            console.log("Has perdido");
        })
});

