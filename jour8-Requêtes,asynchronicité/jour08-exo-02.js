const request = require('request');

function getFact(){
    console.log("start request");
    request.get("https://api.chucknorris.io/jokes/random", function getFact(err, res, body) {
        let data = JSON.parse(body);
        console.log(data.value);
        
    });
    console.log("end request");
};
getFact();
console.log("out of the function");
    
