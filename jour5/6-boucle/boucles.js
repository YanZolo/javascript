// 01 somme des carrés 
console.log('// 01 somme des carrés');


let base = 5 ;
let totalCarrés= 0;
for ( let i = 0; i <= 5; i++) {
    totalCarrés += base*base;  
    base++ ;    
}
console.log(totalCarrés);


// 02 comptons
console.log('// 02 comptons');

let count = 0;
for( let i = 100; i <= 1000; i++) {
    if(i%7 == 0) {
        count++;
    }
}
console.log(count);


// 03 chanceux
console.log('// 03 chanceux');

let sommeTotal = 0;

for(let i = 0; i < 20; i++) {
    let dé = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log(dé);
    sommeTotal += dé ;
}
console.log(sommeTotal);


// 04 des boites
console.log('// 04 des boites');





