// 01 - hello word

console.log('Hello World');

// 02 - String

var test = "My name is xxx";
console.log(test);

// 03 - concatenation

var name = 'xxx';
console.log("Nice to meet you " + name);
 
// 04 - String Length 

var testLength = "I'm very long !"
console.log(testLength.length);

// 05 - Replace

var food = "croissant is meh";

console.log(food.replace("meh", "so good"));


//06 Up and Down

var basic = "This is cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic);
console.log(basicUp);
console.log(basicDown);

// 07 Split 

var word = "banana";
var letters = word.split('');
console.log(letters);

//08 - Template

var age = 34;

// var template = "Im " + age + " years old";
var template = `Im ${age} years old`;

console.log(template);

// bonus 

var changed = "Bonjour";
console.log(changed.replace(/o/g,"a"));



