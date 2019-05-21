THREE_POKE = []


pokemonIds = [74, 150, 356]
for(i = 0; i < pokemonIds.length; i++){
    loadDoc(pokemonIds[i])
}

function loadDoc(i) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            pokeData = JSON.parse(this.responseText)
            
            
            poke = new Pokemon(
                pokeData.name,
                pokeData.id,
                pokeData.stats[5].base_stat,
                pokeData.stats[4].base_stat,
                pokeData.stats[3].base_stat,
                pokeData.abilities[1].ability.name
                
                )
                THREE_POKE.push(poke)
                
                
                
            }
        }
        xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}`, true);
        xhttp.send();
    };
    
    
class Pokemon {

    constructor(name, id, hp, attack, defense, abilities){
        this.name = name
        this.id = id
        this.hp = hp
        this.attack = attack
        this. defense = defense
        this.abilities = abilities  
        
    }
}


displayInfo = (i) => {
    pokeNombre = document.getElementById('poke')
    pokeNombre.innerText = THREE_POKE[i]["name"]
    pokeHP.setAttribute('class', 'hp')
    pageContainer = document.getElementsByClassName('container')
}

displayInfo(i)