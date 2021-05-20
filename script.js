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


        fetch(pokemons[i].url)
        .then(res =>  res.json())
        .then(json => { json
            
           //console.log(json)
           var list = document.getElementsByClassName(pok)[0]
           
           list.getElementsByClassName("img")[0].src = json.sprites.other.dream_world.front_default
           list.getElementsByClassName("numero")[0].innerHTML = "Nº. " + json.order
           list.getElementsByClassName("nombre")[0].innerHTML = json.name
    
                    
           var bocadillo = list.getElementsByClassName("bocadillo")[0]
           bocadillo.getElementsByClassName("peso")[0].innerHTML = "Weight: "+ json.weight
           bocadillo.getElementsByClassName("altura")[0].innerHTML = "Height: "+ json.height
           bocadillo.getElementsByClassName("experiencia")[0].innerHTML = "Experience: "+ json.base_experience

           var abilities = list.getElementsByClassName("abilities")[0]
           console.log(abilities.getElementsByClassName("lista")[0].getElementsByClassName("primero")[0])
           for (let j = 0; j < json.abilities.length; j++) {
            var avility = abilities.getElementsByClassName("lista")[0]
            avility.getElementsByClassName(j)[0].innerHTML = json.abilities[j].ability.name

            
           }
               

        })
     }
 }   

