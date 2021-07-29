
function multiply(nbEntier) {
    let result = "";
    if (isNaN(nbEntier)) {
        console.log('error i need a number');
        
    } else {

        for (let i = 1; i <= 10; i++) {
            result = nbEntier * i;
            console.log(`${nbEntier} x ${i} = ${result}`);

        }

    }
}
// multiply(parseInt(process.argv[2]));


function addition(number) {
    let total = 0;
    for(let i = 1; i <= 10; i++) {
        total = number + i;
        console.log(`${number} + ${i} = ${total}`);
    }
}
// addition(parseInt(process.argv[2]));

module.exports = {
    multiply,
    addition
}