const prompt = require('prompt');
prompt.start();


let scoreJoueur = 0;
let scoreBanque = Math.floor(Math.random() * (21 - 16 + 1) + 16);
let nbTour = 1;
let config = [
    {
        name: "tirez une carte? yes/no",
        validator: /[yes|no]/i,
        warning: 'veuillez dire "yes" ou "no"'
    }
];


function startGame() {

    prompt.get(["tirez une carte? yes/no"], function (err, res) {
        if (err) {
            console.log(err)
        }

        if (nbTour <= 7) {

            
            switch (res["tirez une carte? yes/no"]) {
                case 'yes':
                    nbTour++;
                    scoreJoueur += Math.floor(Math.random() * (10 - 1 + 1) + 1);
                    console.log(`score total joueur: ${scoreJoueur}`);

                    if (scoreJoueur == 21) {
                        console.log(`Black Jack ! Vous avez gagné, score banque: ${scoreBanque}, votre score: ${scoreJoueur}`);
                        prompt.get('replay?', function (err, res) {
                            if (err) {
                                console.log('erreur prompt')
                            }
                            else if (res['replay?'] === 'yes') {
                                scoreJoueur = 0;
                                nbTour = 1;
                                startGame(); // relance le jeu
                            }
                            else {
                                console.log('À bientôt !'); // fin du jeu
                            }
                        });

                    }
                    else if (scoreJoueur < 21 && nbTour <= 7) {
                        startGame();
                    }
                    else {
                        console.log(`Vous avez perdu, score banque: ${scoreBanque}, votre score: ${scoreJoueur}`);
                        prompt.get('replay?', function (err, res) {
                            if (err) {
                                console.log('erreur prompt')
                            }
                            else if (res['replay?'] === 'yes') {
                                scoreJoueur = 0;
                                nbTour = 1;
                                startGame(); // relance le jeu
                            }
                            else {
                                console.log('À bientôt !'); // fin du jeu
                            }
                        });
                    }
                    break;


                case 'no':

                    if (scoreJoueur < scoreBanque) {
                        console.log(`la banque à gagné! score: banque: ${scoreBanque}\n score: joueur: ${scoreJoueur}`);
                        prompt.get('replay?', function (err, res) {
                            if (err) {
                                console.log('erreur prompt')
                            }
                            else if (res['replay?'] === 'yes') {
                                scoreJoueur = 0;
                                nbTour = 1;
                                startGame(); // relance le jeu
                            }
                            else {
                                console.log('À bientôt !'); // fin du jeu
                            }
                        });
                    }
                    else if (scoreJoueur === scoreBanque) {
                        console.log(`la banque gagne! score: banque: ${scoreBanque}\n score: joueur: ${scoreJoueur}`);
                        prompt.get('replay?', function (err, res) {
                            if (err) {
                                console.log('erreur prompt')
                            }
                            else if (res['replay?'] === 'yes') {
                                scoreJoueur = 0;
                                nbTour = 1;
                                startGame(); // relance le jeu
                            }
                            else {
                                console.log('À bientôt !'); // fin du jeu
                            }
                        });
                    }
                    else if (scoreJoueur > scoreBanque) {
                        console.log(`vous avez gagné! score: banque: ${scoreBanque}\n score: joueur: ${scoreJoueur}`);
                        prompt.get('replay?', function (err, res) {
                            if (err) {
                                console.log('erreur prompt')
                            }
                            else if (res['replay?'] === 'yes') {
                                scoreJoueur = 0;
                                nbTour = 1;
                                startGame(); // relance le jeu
                            }
                            else {
                                console.log('À bientôt !'); // fin du jeu
                            }
                        });
                    }


                    break;
            };// fin du switch


        };// fin du if



    });   // fin du prompt

};  // fin de la function startGame



startGame();




