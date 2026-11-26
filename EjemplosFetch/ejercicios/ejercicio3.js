document.addEventListener("DOMContentLoaded", () => {
    let miDiv=document.getElementById("miDiv");

    const url="https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(url)
        // .then(response => response.json())
        .then(response => {
            if(!response.ok){
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data=>data.drinks[0])
        .then(cocktail => {
            console.log(cocktail)
            let string="";
            string+="<b>Nombre:</b>"+cocktail.strDrink+"<br>";
            string+="<b>Ingredientes:</b><br>";
            const prefijo="strIngredient";
            let nombreIngrediente="";
            for(let i=1;i<=15;i++){
                nombreIngrediente=prefijo+i;
                console.log(nombreIngrediente);
                console.log(cocktail[nombreIngrediente]);
                if(cocktail[nombreIngrediente]==null)
                    break;
                else{
                    string+="- "+cocktail[nombreIngrediente]+"<br>";
                }
            }

            miDiv.innerHTML=string;
            let img=document.createElement('img');
            img.src=cocktail.strDrinkThumb;
            img.setAttribute("width", "300");
            miDiv.appendChild(img);
        })
        .catch(error=>{
            console.log(error);
        })

});