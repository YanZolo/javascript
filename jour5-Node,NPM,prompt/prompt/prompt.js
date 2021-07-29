var prompt = require('prompt');
prompt.start(); //demarre le prompt


function onErr(err) {// permet de gerer les erreurs}

    console.log(err);
    return;
}
var properties = [
    {
      name: "username",
      validator: /^[a-zA-Z\s\-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
      warning: "Le username ne doit contenir que des lettres, espaces et tirets"
    },
    {
      name: "password",
      hidden : true,    // n'affichera pas la saisie de l'utilisateur à l'écran  
      validator: /^[0-9\s\-]+$/ ,
      warning: "Le pasword  doit contenir que des chiffres"
    }
  ];


prompt.get(properties, function(err, res){
    //demande à obtenir les propriétés 'username' et 'email'
    if(err) {
        return onErr(err);
    }

    console.log('données reçues :');
    console.log('=> Username : ' + res.username);
});





















// let string = "bonjour 22" ;
// let regexTest = /^\w/;
// let regexTest2 = /[^a-z]/;
// // let regexMatch = /^\w/;

// let test = regexTest.test(string);
// let match = regexTest2.test(string);

// console.log("test est :"+test);
// console.log("match est :"+match);




