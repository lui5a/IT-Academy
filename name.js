//FASE 1


var nombre = ["L","u","i","s","a"];

for ( var i = 0; i< nombre.length; i++){
  console.log(nombre[i]);
}

//FASE 2
function contains(vocales, letra)
	{
		if(vocales.indexOf(letra) > -1)
		{
		console.log('vocal');
	}else{
		console.log('consonante');
		}
	}
var vocal = ['a','e','i','o','u']

contains(vocal, 'L');
contains(vocal, 'u');
contains(vocal, 'i');
contains(vocal, 's');
contains(vocal, 'a');


//EXTRA

nombre.forEach(function(element){ 
  
  if(isNaN(element) === true )
  {console.log( element + ": " + 'es una letra');
  }else{
    console.log(element + ": " +'Els noms de persones no contenen números!.');
  } 
});

//FASE 3

function frequencies(a)
{
    return new Map([...new Set(a)].map(
        x => [x, a.filter(y => y === x).length]
    ));
}

frequencies(nombre).forEach((valor, letra) => console.log(letra + ' = ' + valor));

//FASE 4

var apellido = ["T", "e", "n", "o", "r", "i", "o"];

var myFullName = [];

myFullName.push(nombre + ", ," + apellido);

console.log(myFullName);

