const boton=document.getElementById("boton");
let usuarios=["Ane", "Jokin", "Adu"];

boton.addEventListener("click", (event) => {
    event.preventDefault();
    const nombre=document.getElementById("nombre");

    comprobarUsuario(nombre.value)
        .then((valor)=>{
            console.log(valor);
            usuarios.push(nombre.value);
            console.log("Registro correcto");
            console.log(usuarios.valueOf());
        })
        .catch((error)=>{
            console.log(error);
            console.log(usuarios.valueOf());
            // console.log("Ya existe el nombre de usuario");
        })
});

function comprobarUsuario(nombre){
    return(new Promise((resolve,reject)=>{
        console.log("Usuario introducido en el formulario: "+nombre);

        if(!usuarios.includes(nombre)){
            // usuarios.push(nombre);
            resolve("Ok");
        }else{
            reject("Ya existe el nombre de usuario");
        }
    }))
}