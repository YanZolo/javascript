function calculateAge(birthday){
    let dateBirth= new Date(birthday);
    let dateToday = new Date();
    let age = dateToday.getFullYear() - dateBirth.getFullYear();
    // console.log(dateBirth);
    // console.log(dateToday);
    // console.log(age);

    return age;
}
console.log(calculateAge("1986-11-30"));











// ce que fait reduce() ?

// let table = [1, 2, 3, 4];

// let acc = 0;
// let curr;
// let newTable =[];

// for(let i = 0; i<table.length;i++) {
//     curr = table[i];
//     acc += curr ;
   
    
//     console.log("acc" +acc)
//     }
    
    

// newTable.push(acc);
// console.log( newTable);


