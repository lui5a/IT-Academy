//FASE 1

var nombre = ["L","u","i","s","a"];
 for ( var i = 0; i< nombre.length; i++){
  console.log(nombre[i]);
}

//FASE 2

var vocal = ['a','e','i','o','u']

function contains(letra) {
		if(vocal.indexOf(letra.toLowerCase()) > -1)
		{
		console.log(letra +  " : " +'vocal');
	}else{
		console.log(letra +  " : " + 'consonante');
		}
}

//EXTRA

nombre.forEach(function(letra){ 
    if(isNaN(letra))
    {contains(letra);
    }else{
      console.log(letra + ": " +'Els noms de persones no contenen números!.');
    }
});


// //FASE 3

var map = new Map();

for (var i = 0; i < nombre.length; i++) {

var word = nombre[i];
console.log(word);


if(map.has(word)){
	counter = map.get(word)+1;
} else{
	counter=1;
}
map.set(word,counter);

  console.log(map);
}

//FASE 4

var apellido = ["T", "e", "n", "o", "r", "i", "o"];

var myFullName = [];

myFullName.push(...nombre,'',...apellido);

console.log(myFullName);




