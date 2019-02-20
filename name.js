//FASE 1

var nombre = ["L","u","i","s","a","a","A"];

for ( var i = 0; i< nombre.length; i++){
  console.log(nombre[i]);
}

//FASE 2 + Extra

var vocal = ['a','e','i','o','u' ];

nombre.forEach(function contains(letra){
  if((vocal.indexOf(letra.toLowerCase()) > -1) && (isNaN(letra) === true)) 
    {
      console.log(letra + ": " +'vocal');
    }else if (isNaN(letra) ===true){
      console.log(letra + ": " +'consonant');
    }else {
      console.log(letra + ": " +'Els noms de persones no contenen números!.');
    }
    
});

//FASE 3

function frecuencias(num){
  this[num.toLowerCase()] = (++this[num.toLowerCase()] || 1);
  return this;
}
   
console.log(nombre.map(frecuencias, {}).pop());


//FASE 4

var apellido = ["T", "e", "n", "o", "r", "i", "o"];

var myFullName = [];

myFullName.push(...nombre,'',...apellido);

console.log(myFullName);



