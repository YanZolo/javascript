let prompt = require('prompt');

// const user = {
//     name: 'GFG',
//     job: 'web dev'
// };

let parameters = [
    {            
            name: 'email',
            validator: /^\w+\.*\w+\@\w+\.\w+$/i,
            warning: "l'email doit etre au bon format "
        },
    {            
            name: 'username',
            validator: /\w+\-*/i,
            warning: 'Le mot de passe doit commencé par une lettre et en contenir 5 minimum et doit contenir 2 chiffres minimun dont 1 chiffre à la fin du mot de passe '
        },
        {
            name: "password",
            validator: /\w{6,}\d*/i,
            warning: 'mauvais password'
        }
 

];

function CheckProfile() {

    prompt.get(parameters, function(err, res){
        
        console.log(res.email);
        console.log(res.username);
        console.log(res.password); 

        if(res.email  && res.username && res.password){
            console.log('All good');
        }else{
            console.log('error');
            CheckProfile();
        }
       
    });
    

}

CheckProfile();


/* pour rajouter des propriétés dans un objet existant : */

// prompt.addProperties(user, ["age", "pays"], function(err, user){
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(user);
// })


prompt.start();