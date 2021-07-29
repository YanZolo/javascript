// 01 Object-------------------------------------------
console.log('// 01 Object');

let cat = {
    name: 'Garfield',
    age: 3,
    isCute: true
};
console.log(cat);

if (cat.isCute == true) {
    console.log('So cute !');
};


// 03 Even-----------------------------------------------
console.log('// 03 Even');


function checkIfEven(num) {
    if (num % 2 == 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
};

checkIfEven(35);



// 04 Compare------------------------------------------
console.log('// 04 Compare');

function compare(num1, num2) {
    if (num1 > num2) {
        console.log('num1 is bigger');
    }
    else if (num1 < num2) {
        console.log('num2 is bigger');
    }
    else {
        console.log('num1 is equal to num2');
    }
};

compare(25, 36);


// 05 - Add Up------------------------------------
console.log('// 05 - Add Up');

function addUp(num) {
    let total = 0;
    for (let i = 0; i <= num; i++) {
        total += i;
    }
    console.log(total);
}

addUp(12);


// 06 - Time ------------------------------------
console.log('// 06 - Time');

function format(num) {
    let heure = Math.floor(num / 3600);
    let minute = Math.floor((num % 3600) / 60);
    let seconde = num % 60;
    console.log(`${heure}:${minute}:${seconde}`);
}
format(3700);


// bonus -------------------------------------------
console.log('// Bonus');

function generatePassword(num) {
    if (num < 6 | num > 15) {
        console.log('error');
    }

    let password = "";

    for (let i = 0; i < num; i++) {
        password += String.fromCharCode(Math.random() * (90 - 65 + 1) + 65);
    }
    console.log(password);
};

generatePassword(8);

// Bonus II--------------------------------------------------
console.log('// Bonus II');

function launchDice(numberOfDice) {
    var joueur1 = 0;
    var joueur2 = 0;


    for (let i = 0; i < numberOfDice; i++) {
        joueur1 += Math.floor(Math.random() * (6 - 1 + 1) + 1);
        joueur2 += Math.floor(Math.random() * (6 - 1 + 1) + 1);

    }
    console.log(`joueur1 score : ${joueur1}`);
    console.log(`joueur2 score : ${joueur2}`);

    if ( joueur1 > joueur2) {
        console.log(`joueur1 Win, score : ${joueur1}`);

    } else if (joueur2 > joueur1){
        console.log(`joueur2 Win, score : ${joueur2}`);

    }else {
        console.log('egalité !');
    }
    joueur1 = 0;
    joueur2 = 0;
}
launchDice(5);



















































