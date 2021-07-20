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