const request = require('request');
const prompt = require('prompt');

prompt.start();

prompt.get(['Entrer un nombre'], function(err,res){
    if(err){
        console.log(err);
        return;
    }
    
    catchPokemon(parseInt(res['Entrer un nombre']));
    

})

function catchPokemon(num) {
    request.get("https://pokeapi.co/api/v2/pokemon/"+ num, function(err, res, body){
        if(num > 898 && num < 10001 || num > 10220) {
            console.log(err);
            console.log("Veuillez entrer un nombre entre 1 et 898 ou entre 10001 et 10220");
            
        }
        let data = JSON.parse(body);
        console.log(`id: ${num}\nname: ${data.name}`);
    })
}

// catchPokemon(parseInt(process.argv[2]));