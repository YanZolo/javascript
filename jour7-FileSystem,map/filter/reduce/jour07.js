// 01 File systeme
console.log('// 01 File systeme');

let fs = require("fs");

// lire les stats d'un fichier----------------------------------------------------------------------------------

// fs.stat("./jour07.txt", function(err,stats){
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log(stats);
// 	console.log('et voila! voyons le resultat');

// 	if(stats.isFile()){
// 		console.log("c'est un fichier");
// 	}

// 	if ( stats.isDirectory()) {
// 		console.log("c'est un dossier");
// 	}
// });

// lecture d'un fichier -------------------------------------------------------------------------------------------

// fs.readFile("../jour6/fichier.txt", function (err, data) {
// 	if (err) {
// 	   console.error(err);
// 	   return;
// 	}
 
// 	console.log("Lecture en différé : " + data.toString());
//  });

// ecriture dans un fichier ------------------------------------------------------------------------------------------

 fs.writeFile("./jour7/fichier.txt", "Coucou bip boup",  function(err) {
	if (err) {
	   return console.error(err);
	}
 
	console.log("Et voilà ! Voyons le résultat :");
 
	fs.readFile("./jour7/fichier.txt", function (err, data) {
	   if (err) {
		  return console.error(err);
	   }
 
	   console.log("Lecture en différé : " + data.toString());
	});
 });







// 08 Cake
console.log('// 08 cake');

let cakes = [
    {
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
];

var chocolateCake = cakes.filter(function(element){
    return element.flavor=== 'chocolate';
}).map(function(element){
     element.status = 'sold out';
     return element;
});
// console.log(chocolateCake);


// 