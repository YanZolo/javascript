

let countriesNames = [];

const request = require("request");

request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {
    console.log(err);
    console.log(res.statusCode);

    let data = JSON.parse(body);

    for (let i = 0; i < data.length; i++) {
        countriesNames.push(data[i].name);
    }
    console.log(countriesNames);
});


// console.log("Hello.");

// setTimeout(function() {
//   console.log("Goodbye !");
// }, 2000);

// console.log("Hello again !");

// let request = require('request');



// function getCountries(err, data, body) {

//   request.get("https://restcountries.eu/rest/v1/all", function(err, res, body){

//     let data = JSON.parse(body);
//   })

// }




