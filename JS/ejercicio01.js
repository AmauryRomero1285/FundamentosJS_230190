//Declaración de variables

//a) Var

var miNombre="Yáred A.";
var misApellidos;
var miEdad=18;

//El objeto de console nos permite enviar datos a la terminal y poder visualizarel valor de una variable o resultado de una función o metódo
console.warn("--- Declaración de variables usando: VAR");
console.log("Intentando leer las variables: ",miNombre,misApellidos);

misApellidos="Romero Martínez";
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas",miNombre,misApellidos);

//Una variable puede cambiar de valor en el proceso de ejecución del programa.

//b) Const

console.warn("--- Declaración de variables del tipo constante usando: CONST");
const miUniversidad="UTXJ";
const miMatricula="230190";
console.log("",miNombre," ",misApellidos, " se que estudias actualmente en: ",miUniversidad," te asignaron la matricula: ",miMatricula," y tienes una edad de: ",miEdad," años");
 
//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeOf()

console.warn("Analizando los datos puedo decir que: ");
console.log("miNombre es del tipo: ",typeof(miNombre));
console.log("misApellidos es del tipo: ",typeof(misApellidos));
console.log("miUniversidad es del tipo: ",typeof(miUniversidad));
console.log("miMatricula es del tipo: ",typeof(miMatricula));
console.log("miEdad es del tipo: ",typeof(miEdad));

// c) Let
let mifechaNacimiento="2005-12-08";
let miColorFavorito;

console.warn("---Declaración de Varibles locales usando: LET");
console.log("Genial, te voy conociendo mejor, ahora se que tu naciste el: ",mifechaNacimiento, "color Favorito es : mmmmmmmm dejame pensar...");
miColorFavorito="Naranja";
console.log(` creo que es $(), ¿le atiné? `)//La manera de mezclar textos fijos con el valor actual de las variables se le conoce como: interpretación y deben iniciar y finalizar con un backtic-tildeinversa
console.log("Analizando los datos puedo deducir que: ");
console.log("miMatricula es del tipo: ",typeof(miColorFavorito));
console.log("miEdad es del tipo: ",typeof(mifechaNacimiento));
