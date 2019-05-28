THREE_POKE = []


pokemonIds = [74, 150, 356]
for(i = 0; i < pokemonIds.length; i++){
    loadDoc(pokemonIds[i])
}

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

class Trainer{
    constructor(name){
        this.name = name
        this.pokemons = []
    }
    all(){
        this.pokemons.push(pokemonObjects)
    }
    
    get(){
        
    }
                
                }
    new_trainer = new Trainer("Syx3k");


function loadDoc(i) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            pokeData = JSON.parse(this.responseText)
            
            
            pokemonObjects = new Pokemon(
                pokeData.name,
                pokeData.id,
                pokeData.stats[5].base_stat,
                pokeData.stats[4].base_stat,
                pokeData.stats[3].base_stat,
                pokeData.abilities[1].ability.name
                
                )
                THREE_POKE.push(pokemonObjects)
                new_trainer.pokemons.push(pokemonObjects)
            }
        }
        xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}`, true);
          xhttp.send();
    };

function displayInfo() {
    pokeGrid = document.getElementById('pokeGrid')
    secondPokemon = document.getElementById('pokeNum2')
    thirdPokemon = document.getElementById('pokeNum3')
    
    
    pokeName = document.getElementById('pokeNum1')
    poke1ID = document.getElementById('poke1Id')
    poke1HP = document.getElementById('poke1Hp')
    poke1Attack = document.getElementById('poke1Attack')
    poke1Defense = document.getElementById('poke1Defense')
    poke1Ability = document.getElementById('poke1Ability')
    
    pokeName.innerText = THREE_POKE[0]["name"]
    poke1ID.innerText = THREE_POKE[0]["id"]
    poke1HP.innerText = THREE_POKE[0]["hp"]
    poke1Attack.innerText = THREE_POKE[0]["attack"]
    poke1Defense.innerText = THREE_POKE[0]["defense"]
    poke1Ability.innerText = THREE_POKE[0]["abilities"]
    
    poke2ID = document.getElementById('poke2Id')
    poke2HP = document.getElementById('poke2Hp')
    poke2Attack = document.getElementById('poke2Attack')
    poke2Defense = document.getElementById('poke2Defense')
    poke2Ability = document.getElementById('poke2Ability')
    
    secondPokemon.innerText = THREE_POKE[1]["name"]
    poke2ID.innerText = THREE_POKE[1]["id"]
    poke2HP.innerText = THREE_POKE[1]["hp"]
    poke2Attack.innerText = THREE_POKE[1]["attack"]
    poke2Defense.innerText = THREE_POKE[1]["defense"]
    poke2Ability.innerText = THREE_POKE[1]["abilities"]
    
    poke3ID = document.getElementById('poke3Id')
    poke3HP = document.getElementById('poke3Hp')
    poke3Attack = document.getElementById('poke3Attack')
    poke3Defense = document.getElementById('poke3Defense')
    poke3Ability = document.getElementById('poke3Ability')
    
    thirdPokemon.innerText = THREE_POKE[2]["name"]
    poke3ID.innerText = THREE_POKE[2]["id"]
    poke3HP.innerText = THREE_POKE[2]["hp"]
    poke3Attack.innerText = THREE_POKE[2]["attack"]
    poke3Defense.innerText = THREE_POKE[2]["defense"]
    poke3Ability.innerText = THREE_POKE[2]["abilities"]

    trainerName = document.getElementById('trainer-name')
    trainerName.innerText = new_trainer["name"]

}


setTimeout(displayInfo, 300)