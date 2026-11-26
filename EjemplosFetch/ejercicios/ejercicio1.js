let miDiv=document.getElementById("miDiv");

const url="https://pokeapi.co/api/v2/pokemon?limit=10";

fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(datosJson=>datosJson.results)
    .then(pokemon =>{
        console.log(pokemon);
        let texto = "<b>Pokemon:</b><br>";
        texto+="<ul>";
        for(let i=0; i<pokemon.length;i++){
            texto+="<li>"+pokemon[i].name+"</li>";
        };
        
        texto+="</ul>";
        miDiv.innerHTML=texto;
    })
    .catch(error=>{
        console.log(error);
    })

