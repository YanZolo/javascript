const prompt = require('prompt');
prompt.start();

// grille avec obstacles
let grid = [
    [' ', "#", ' ', ' ', ' ', "#", ' ', ' ', ' ', "#"],
    [' ', "#", "#", ' ', ' ', ' ', ' ', "#", ' ', ' '],
    [' ', ' ', ' ', ' ', "#", ' ', "#", ' ', ' ', "#"],
    [' ', "#", ' ', "#", ' ', ' ', ' ', ' ', ' ', "#"],
    [' ', ' ', ' ', "#", ' ', ' ', ' ', "#", "#", ' '],
    ["#", ' ', "#", ' ', ' ', ' ', ' ', ' ', ' ', "#"],
    [' ', ' ', ' ', "#", ' ', "#", ' ', "#", ' ', ' '],
    [' ', "#", ' ', "#", ' ', ' ', ' ', ' ', "#", ' '],
    [' ', ' ', "#", ' ', ' ', "#", ' ', "#", ' ', ' '],
    [' ', "#", ' ', ' ', ' ', "#", ' ', "#", ' ', ' '],
];
// orientation du robot pour l'instant rover.direction = "N"
let rover = {
    direction: "NORD",
    x: 0,
    y: 0
};
// respresentation du rover
let representationRover = '@-rover-@';
// tableau vide dans lequel on push les directions 
const historique = [];
// test de validation pour la saisi dans le prompt
let instruction = [{    
        name: 'instructions',
        validator: /[rlfb]/gi,
        warning : 'veuillez entrer uniquement les lettres L R F ou B en majuscule ou minuscule'
    }
];
//lancement du prompt
prompt.get(instruction, function (err, res) {
    console.log(res);    
    if (err) {
        console.log(err);
        return;
    }
    // function qui contiens un string du depacement complet example "NFEFSF" Nord forward Est forward Sud forward
    function piloteRover() {
        for (let i = 0; i < res.instructions.length; i++) {
            switch (res.instructions[i]) {
                case 'f':
                    moveForward();
                    break;
                case 'b':
                    moveBackward();
                    break;
                case 'l':
                    turnLeft();
                    break;
                case 'r':
                    turnRight();
                    break;
                case '1':
                    diagonal(parseInt(res.instructions[i]));
                    break;
                case '2':
                    diagonal(parseInt(res.instructions[i]));
                    break;
                case '3':
                    diagonal(parseInt(res.instructions[i]));
                    break;
                case '4':
                    diagonal(parseInt(res.instructions[i]));
                    break;
            }
        }
    };
    // appel de la fonction piloteRover avec ce que l'on a saisi dans le prompt comme argument
    piloteRover(res.instructions);
    grid[rover.y][rover.x] = representationRover;
    console.table(grid);
    console.log(historique);
});
// function qui permet de se deplacer en diagonal
function diagonal(num) {
    if (rover.x < 9 || rover.y < 9 || rover.x >= 1 || rover.y >= 1) {
        switch (parseInt(num)) {
            case 1:
                rover.direction = 'NE';
                grid[rover.y][rover.x]= rover.direction + " ↗";
                rover.y--;
                rover.x++;
                historique.push(`${rover.direction},position; x:${rover.x}, y:${rover.y}`);
                break;
            case 2:
                rover.direction = 'NO';
                grid[rover.y][rover.x]= rover.direction + " ↖";
                rover.y--;
                rover.x--;
                historique.push(`${rover.direction},position; x:${rover.x}, y:${rover.y}`);
                break;
            case 3:
                rover.direction = 'SE';
                grid[rover.y][rover.x]= rover.direction + " ↘";
                rover.y++;
                rover.x++;
                historique.push(`${rover.direction},position; x:${rover.x}, y:${rover.y}`);
                break;
            case 4:
                rover.direction = 'SO';
                grid[rover.y][rover.x]= rover.direction + " ↙";
                rover.y++;
                rover.x--;
                historique.push(`${rover.direction},position; x:${rover.x}, y:${rover.y}`);
                break;
        }
    }
};
// function qui fera tourner à gauche le robot
function turnLeft() {

    rover.direction === 'NORD' ? rover.direction = 'OUEST' :
        rover.direction === 'OUEST' ? rover.direction = 'SUD' :
            rover.direction === 'SUD' ? rover.direction = 'EST' :
                rover.direction = 'NORD';
    historique.push(`turn to ${rover.direction},position; x:${rover.x}, y:${rover.y}`);


};
// function qui fera tourner à droite le robot
function turnRight() {
    rover.direction === 'NORD' ? rover.direction = 'EST' :
        rover.direction === 'EST' ? rover.direction = 'SUD' :
            rover.direction === 'SUD' ? rover.direction = 'OUEST' :
                rover.direction === 'OUEST' ? rover.direction = 'NORD' :
                    rover.direction = 'NORD';

    historique.push(`turn to ${rover.direction},position; x:${rover.x}, y:${rover.y}`);
};

// function qui fera avancer le robot
function moveForward() {
    if (rover.direction === 'NORD' && rover.y >= 1 && rover.x >= 1) {
        if (grid[rover.y-1][rover.x] === "#") {
            turnLeft();
            moveForward();
        } else {
            grid[rover.y][rover.x]= rover.direction + " ↑";
            rover.y--;
            historique.push(`${rover.direction}, forward direction Nord,position; x:${rover.x}, y:${rover.y}`);
        }
    }
    else if (rover.direction === 'EST' && rover.x <= 8) {
        if (grid[rover.y][rover.x+1] === "#") {
            turnLeft();
            moveForward();
        } else {
            grid[rover.y][rover.x]= rover.direction + " →";
            rover.x++;
            historique.push(`${rover.direction}, forward direction Est,position; x:${rover.x}, y:${rover.y}`);
        }
    }
    else if (rover.direction === 'SUD' && rover.y <= 8) {
        if (grid[rover.y+1][rover.x] === "#") {
            turnLeft();
            moveForward();
        } else {
            grid[rover.y][rover.x]= rover.direction + " ↓";
            rover.y++;
        historique.push(`${rover.direction}, forward direction Sud,position; x:${rover.x}, y:${rover.y}`);
        }        
    }
    else if (rover.direction === 'OUEST' && rover.x >= 1) {
        if (grid[rover.y][rover.x-1] === "#" ) {
            turnLeft();
            moveForward();
        } else {
            grid[rover.y][rover.x]= rover.direction + " ←";
            rover.x--;
        historique.push(`${rover.direction}, forward direction Ouest,position; x:${rover.x}, y:${rover.y}`);
        }        
    }
    else if (rover.x === 9 || rover.y === 9) {        
        console.log(`j'ai atteint la limite!abssice: ${rover.x}, ordonnée: ${rover.y}, direction: ${rover.direction}`);
        console.log(`je vais tourner à gauche! depuis direction: ${rover.direction}`);
        turnLeft(); 
        moveForward();       
        console.log(`nouvelle coordonnées abssice: ${rover.x}, ordonnée: ${rover.y}, direction actuelle: ${rover.direction}`);
    }
    else if (rover.x === 0 || rover.y === 0) {
        console.log(`j'ai atteint la limite! abssice: ${rover.x},ordonnée: ${rover.y}, direction: ${rover.direction}`);        
        console.log(`je vais tourner à gauche! depuis direction: ${rover.direction}`);
        turnLeft(); 
        moveForward();       
        console.log(`nouvelle coordonnées abssice: ${rover.x}, ordonnée: ${rover.y}, direction actuelle: ${rover.direction}`);
    }
};
// function qui fera reculer le robot
function moveBackward() {
    if (rover.direction === 'NORD' && rover.y >= 0 ) {
        if (grid[rover.y+1][rover.x] === "#") {
            turnLeft();
            moveBackward();
        } else {
            grid[rover.y][rover.x]= rover.direction + " ↓" ;
            rover.y++;
            historique.push(`${rover.direction}, backward direction Sud,position; x:${rover.x}, y:${rover.y}`);
        }
    }
    else if (rover.direction === 'EST' && rover.x <= 9) {
        if (grid[rover.y][rover.x-1] === "#") {
            turnLeft();
            moveBackward();
        } else {
            grid[rover.y][rover.x]= rover.direction + " ←";
            rover.x--;
            historique.push(`${rover.direction}, backward direction Ouest,position; x:${rover.x}, y:${rover.y}`);
        }
    }
    else if (rover.direction === 'SUD' && rover.y <= 9 ) {
        if (grid[rover.y-1][rover.x] === "#") {
            turnLeft();
            moveBackward();
        } else {
            grid[rover.y][rover.x]= rover.direction + " ↑";
            rover.y--;
        historique.push(`${rover.direction}, backward direction Nord,position; x:${rover.x}, y:${rover.y}`);
        }        
    }
    else if (rover.direction === 'OUEST' && rover.x >= 0) {
        if (grid[rover.y][rover.x+1] === "#" ) {
            turnLeft();
            moveBackward();
        } else {
            grid[rover.y][rover.x]= rover.direction + " →";
            rover.x++;
        historique.push(`${rover.direction}, backward direction Est,position; x:${rover.x}, y:${rover.y}`);
        }        
    }
    else if (rover.x === 9 || rover.y === 9) {        
        console.log(`j'ai atteint la limite!abssice: ${rover.x}, ordonnée: ${rover.y}, direction: ${rover.direction}`);
        console.log(`je vais tourner à gauche! depuis direction: ${rover.direction}`);
        turnLeft(); 
        moveBackward();       
        console.log(`nouvelle coordonnées abssice: ${rover.x}, ordonnée: ${rover.y}, direction actuelle: ${rover.direction}`);
    }
    else if (rover.x === 0 || rover.y === 0) {
        console.log(`j'ai atteint la limite! abssice: ${rover.x},ordonnée: ${rover.y}, direction: ${rover.direction}`);        
        console.log(`je vais tourner à gauche! depuis direction: ${rover.direction}`);
        turnLeft(); 
        moveBackward();       
        console.log(`nouvelle coordonnées abssice: ${rover.x}, ordonnée: ${rover.y}, direction actuelle: ${rover.direction}`);
    }
}