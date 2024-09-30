//Repaso de Arreglos
//Estilización de los mensajes de salida
const bg="linear-gradient(11deg,rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console =`background: ${bg};color:red; border-radius : 6px;padding:4px;font-sixe:1.0rem`

//Personalización de salidas a consola
console.warn("Práctica 06: Arreglos en JavaScript");


//Declaración de un arreglo
//Para declarar un arreglo (array) de datos en javascript basta con agregar[], y dentro los datos que contendrá el arreglo.

const mesesAnio=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]


console.log("%c1.- Declaración de un arreglo (Array)",style_console);
console.log(mesesAnio);
console.table(mesesAnio);

//Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los límites establecidos. Siendo el límite inferior 0 y el superior tamaño -1

console.log("%c2.-Leer o recuperar los datos d un arreglo",style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`);
console.log(`El ultimo mes del año es${mesesAnio[-1]}`);
 console.log(`El treceavo mes del año es: ${mesesAnio[12]}`);

 console.log(`¿Qué tipo de dato es un arreglo?:${typeof(mesesAnio)}`);

 //Al ser JavaScript un lenguaje debilmente tipado podemos crear arreglos mixtos de tipos de datos

 const saludar=function(nombre){return`hola${nombre}!`}

 let arrgeloMixto=["String",5,45.26,-200,-.16854,Symbol("Josu"),'z', false, BigInt(11111111222222234523456837564516516514651616816816516165986517657847),{latitud:"20° 18' 0\"N", longuitud:"97° 58' 00\W",altitud:796},saludar,null]

 console.log(arrgeloMixto);
 console.table(arrgeloMixto);
 console.log(typeof(arrgeloMixto));

 console,log("Verificamos los tipos de datos de los elementos del arreglo: ");
 console.log(`El dato en la posición [0]=${arrgeloMixto[0]} y es del tipo ${typeof(arrgeloMixto[0])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[1]} y es del tipo ${typeof(arrgeloMixto[1])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[2]} y es del tipo ${typeof(arrgeloMixto[2])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[3]} y es del tipo ${typeof(arrgeloMixto[3])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[4]} y es del tipo ${typeof(arrgeloMixto[4])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[5],toString} y es del tipo ${typeof(arrgeloMixto[5])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[6]} y es del tipo ${typeof(arrgeloMixto[6])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[7]} y es del tipo ${typeof(arrgeloMixto[7])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[8]} y es del tipo ${typeof(arrgeloMixto[8])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[9]} y es del tipo ${typeof(arrgeloMixto[9])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[10]} y es del tipo ${typeof(arrgeloMixto[10])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[11]} y es del tipo ${typeof(arrgeloMixto[11])}`);
 console.log(`El dato en la posición [0]=${arrgeloMixto[12]} y es del tipo ${typeof(arrgeloMixto[12])}`);


 console.log("%c3.- Arreglod Multidimensionales (Matrices)",style_console);

 //Una matriz es una estructura de datos multidimensional (Tabla) de n columnas por m filas

 let matriz=[[1,2,3,4],['a','b','c','d']]
//esta es una matriz regular de 4x4

console.log(matriz);
console.table(matriz);

console.log("Declarando una matriz irregular");

const matrizIrregular=[["juan","Pedro","María","Inés"],[true,false,null],[9.2]]

console.log(matrizIrregular);
console.table(matrizIrregular);

//Accediendo a los valores de una matríz

console.log("Leyendo las propiedades de una matriz regular");
console.log(`Elemento en la posición [0][0]: ${matriz[0][0]}`);
console.log(`Elemento en la posición [0][0]: ${matriz[0][0]}`);

console.log("Leyendo las propiedades de una matriz irregular");
console.log(`Elemento en la posición [0][0]: ${matrizIrregular[0][0]}`);
console.log(`Elemento en la posición [2][0]: ${matrizIrregular[2][0]}`);
console.log(`Elemento en la posición [1][2]: ${matrizIrregular[1][2]}`);

//Funciones y Métodos de Arreglos
//Los métodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre (), en caso de que no lleve (), no es un métoso sino una propiedad

console.log("%c4.-Funciones o Métodos de los Arreglos (Array Methos or Array Functins)",style_console);
console.log("¿Cómo saber cual es el tamaño de un arreglo?");
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`);
console.log(`arregloMixto es un arreglo de tamaño: ${arrgeloMixto.length}`);
console.log("¿Qué pasa con los multidimensionales?");
console.log(`arreglo es un arreglo de tamaño: ${matriz.length}`);
console.log("mmm, eso me da l tamaño de  de numero de filas de la matriz, pero como saber el númeo de columnas");
console.log(`la matriz regular tiene un número de ${matriz[0].length}`);
console.log("¿Y para las irregulares?");
//para saber la dimensión de una matriz irregular podemos hacer el uso de ciclo
let numeroFilas=matrizIrregular.length;
for (let i=0;i<numeroFilas;i++){
    console.log(`La longitud de la fila ${[i]} es =${matrizIrregular,[i].length}`);
}