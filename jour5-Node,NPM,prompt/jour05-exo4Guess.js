var prompt = require('prompt');




let mysteryNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);


var shema =
{
    properties: {

        number: {
            description: "Quelle est le nombre mystere",
            pattern: /^\d{1,2}$/,
            warning: "entrer un chiffre"
        }
    }
};


function guess() {
    prompt.get(shema, function (reject, resolve) {

        var number = parseInt(resolve.number);

        if (number == mysteryNum) {
            console.log("bravo !");
        }
        else if (number > mysteryNum) {
            console.log("moins !");
            guess();
        }
        else {
            console.log("plus !");
            guess();
        }

    })

}
prompt.start();
guess();
