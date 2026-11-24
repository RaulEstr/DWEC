const promesa = new Promise((resolve,reject)=>{
    const exito = true;

    if(exito){
        setTimeout(()=>{
            resolve("Operación exitosa");
        },5000);
        
    }else{
        setTimeout(()=>{
            reject("Promesa rechazada");
        },7000);
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
        console.log("Promesa terminada");
    });

