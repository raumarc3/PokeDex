let pokemons = []
let pokemonUrl
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res =>  res.json())
    .then(json => {

        printPokemons(json.results) 

    })

  
 function printPokemons(pokemons){
     for(let i = 0; i < pokemons.length; i++){
        let pok = "pokemon" + i 
        let img = "img" + i
        let num = "numero" + i

        fetch(pokemons[i].url)
        .then(res =>  res.json())
        .then(json => {
            
           json
           var list = document.getElementsByClassName(pok)[0]

           list.getElementsByClassName("img")[0].src = json.sprites.front_default
           list.getElementsByClassName("numero")[0].innerHTML = "Nº. " + json.order
           list.getElementsByClassName("nombre")[0].innerHTML = json.name
        })
     }
 }   

