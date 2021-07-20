 // 01 Array
 console.log('// 01 Array');

let fruits = ["mango", "lemon", "bluberry"];
console.log(fruits);
console.table(fruits);

// 02 Access
console.log('// 02 Access');

let ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf('butter'));


// 03 Add and Remove
console.log('// 03 Remove');

let objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop();
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);

// 04 Order  
console.log("// 04 Order");

let numbers = [40, 10, 8, 12, 6];
numbers.sort(compareNombres);
console.log(numbers);

function compareNombres(a, b) {
    return a - b ;
}; 

// 05 Boucle  
console.log("// 05 Boucle");

let total = 0;
let limit = 10;

for (let i = 0; i <= limit; i++) {
    total += i ;
}
console.log(total);

//  06 Reverse 
console.log("// 06 Reverse");

let sentence = "Hello Konexio !";
let reverseSentence = [];

for (let i = 0; i < sentence.length; i++) {
    reverseSentence.unshift(sentence[i]);    
}
reverseSentence.join();
console.log(reverseSentence.join(' '));

// bonus
console.log("// bonus");

let tableau= [];
for (let i = 0; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log('fizzbuzz');
    }
    else if(i % 3 == 0){
        console.log('fizz');
    }
    else if(i % 5 == 0){
        console.log('buzz');
    }
    else if(i % 7 == 0){
        continue;
    } else {
        console.log(i);
    }
}

// bonu II
console.log('// bonu II');


let total_1 = 0;
let limit_1 = 10;
let i=1;
while( i <= limit_1) {

    total_1 += i;
    i++;
}
console.log(total_1);

// bonus III 
console.log('// bonus III');

let eleves = ["semou","alexandre","amirM","dani","sofianeA","tissane","ishran","brahim","muheeb","fatouMata","celine","françois","amirA","ali","sofianeS","jeremy"];

let randomEleve = Math.floor(Math.random() * eleves.length);
console.log(eleves[randomEleve]);

// bonus IV 
console.log('// bonus IV');

let tableauBonusIV = [];

for (let i = 0; i < 20; i++) {
    let nbrEntier = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    tableauBonusIV.unshift(nbrEntier);
} 

console.table(tableauBonusIV);

let valeurMax;
for ( let i = 0; i < tableauBonusIV.length; i++) {
        valeurMax = tableauBonusIV[0];
    if (valeurMax < tableauBonusIV[i]) {
        valeurMax = tableauBonusIV[i];
    }
}
console.log(valeurMax);
