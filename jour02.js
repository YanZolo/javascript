// 01 Number
console.log("// 01 Number");

var integer = 102;
var float = 13.9;

console.log(integer);
console.log(float);

// 02 Convert
console.log("// 02 Convert");

let basic = 34;
let stringified = JSON.stringify(basic);
console.log(stringified);

// 03 Round
console.log("// 03 Round");

let num = 1.5;
let rounded = Math.round(num);
console.log(rounded);


// 04 Arithmétique
console.log("// 03 arithmétique");

let test = 12;
let bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);

// 05 Comparaison
console.log("// 04 Comparaison");

let test1 = 143;
let bis1 = 219;
console.log(test1 > bis1);
console.log(test1 < bis1);
console.log(test1 >= bis1);
console.log(test1 <= bis1);

// 06 Condition 
console.log('// 06 Condition');

let limit = 50;
let score = 64;

if ( score >= limit) {
    console.log('Ok good');
    
}else {
    console.log('Oh nooo...')
}

// 07 Condition II
console.log('// 06 Condition II');

let password = 'azerty';
if ( password.length > 5) console.log('The password is secure');

// 08 Condition III
console.log('// 06 Condition III');

if (score >= limit && password.length > 5) {
    console.log('Everything is good');
} else {
    console.log('Nothing is good');
}

// Bonus 
console.log(' // Bonus');


let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(random);

if ( random == 6) {
    console.log('Yes I win');
} else {
    console.log('So close...');
}

// Bonus II
console.log(' // Bonus II');

let month = "January";

switch(month) {
    case'December':

    case'January':
           
    case'February':

    console.log('Winter');    
    break;

    case'March':

    case'April':

    case'May':

        console.log('Spring');
    break;

    case'june': 

    case'July': 

    case'August': 
    console.log('Summer');    
    break;

    case'september': 

    case'october': 

    case'november': 
    console.log('Fall');    
    break;


}


// Bonus III
console.log(' // Bonus III');

var roundedNumber = 3.3;
var decimal = roundedNumber - Math.floor(roundedNumber);


if (decimal > 0.5) {
    roundedNumber = Math.ceil(roundedNumber);
} else {
    roundedNumber = Math.floor(roundedNumber);
}
console.log(roundedNumber);














