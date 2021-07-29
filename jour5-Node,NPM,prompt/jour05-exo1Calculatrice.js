function calculatrice(nb1,op,nb2) {
    let total = 0;
    switch(op) {
        case '+':
            total = nb1 + nb2;
        break;   
        case '-':
            total = nb1 - nb2;
        break;   
        case 'x':
            total = nb1 * nb2;
        break;   
        case '/':
            total = nb1 / nb2;
        break;   
        case '%':
            total = nb1 % nb2;
        break;   
    }
    console.log(total);
}

calculatrice(parseInt(process.argv[2]),process.argv[3],parseInt(process.argv[4]));
// 0

// console.log(process.argv);

// function personne(name, age, adress) {
//     console.log("votre nom est "+ name);
//     console.log("votre age est "+ age);
//     console.log("votre adresse est "+ adress);
//     parseInt(age);
//     console.log(typeof age)
// }
 
// personne("paris", "20", "semou");

// variableCalc();














