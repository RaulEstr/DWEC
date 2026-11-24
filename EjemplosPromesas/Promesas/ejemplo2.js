const promesa = new Promise((resolve,reject)=>{
    const valorAleatorio = Math.round(Math.random()*10);
    // const valorAleatorio = Math.floor(Math.random()*11);
    console.log(valorAleatorio);

    if(valorAleatorio<=5){
        setTimeout(()=>{
            resolve(valorAleatorio+" es correcto");
        },3000);
        
    }else{
        setTimeout(()=>{
            reject(valorAleatorio+" es incorrecto");
        },5000);
    }
});

promesa
    .then((valorExito)=>{
        console.log(valorExito);
    })
    .catch((rechazada)=>{
        console.log(rechazada);
    })
    .finally(()=>{
        console.log("Promesa acabada");
    });
