//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(129,50,36,1) 0%, rgba(155,129,26,1) 23%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Prática 07: Arreglos en Java Script")

console.log("%c1.- Sí/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso
let fechaActual = new Date(2024, 1, 6);
console.log(`Hola, la fecha de hoy es ${fechaActual.toString()}`);

//y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleDateString(`es-MX`,
    {
        weekday: `long`,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        hour12: `false`
    }
);

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días
if (fechaActual.getHours() < 12)
    console.log(`Buenos días, hoy es:${fechaLocalMX}`);

// Existe un extensor de la sentencia if(sí) que es else (en caso contrario)
if (fechaActual.getMonth() <= 6)
    console.log(`Estas en la primer mitad del año.`);
else
    console.log(`estas en la segunda mitad del año.`);

//Que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);

let horarioVerano = false;

if (fechaActual >= inicioPrimavera && fechaActual <= inicioVerano) {
    console.log("Estamos en PRIMAVERA...");
    console.log("Inicia la floración de muchas plantas");
    console.log("Los dias son más largos y las noches más cortas");
    console.log("Muchos animales despiertan de la invernación");
    console.log();
    estacion = "Primavera";
    horarioVerano = true;
}
else if (fechaActual >= inicioVerano && fechaActual < inicioOtonio) {
    console.log("Estamos en OTOÑO...");
    console.log("Los arboles suelen cambiar de follaje");
    console.log("Se registran temperaturas más templadas");
    console.log("Los animales comienzan con la recolección de alimeto y preparan sus espacios para la hibernación, incluso algunas aves migran");
    estacion = "Verano";
    horarioVerano = true;

} else {

    console.log("Estamos en INVIERNO...");
    console.log("En esta temporada los dias son más cortos y las noches más largas");
    console.log("En algunas regiones suele nevar");
    console.log("Dado las bajas tempersturas, se recomienda abrigarse");
    estacion = "Invierno";
    horarioVerano = true;
}

console.log("%c2.- Operdaor Ternario (validación?cumple.no_cumple)", style_console);
//En javaScript existia una operación simplificada que valida si una condición se cumple o no, y que hacer en cada caso

const edadPersona = 18;
const mayorEdadMX = 18;
const mayorEdadUS = 21;
let evaluarMayoriaEdad = (edad) => edad > 18 ? "Eres Mayor de edad" : "No eres mayor de edad"

console.log("Evaluando la mayoria de edad en una persona...");
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestines legales, por lo que debemos considerar un segundo parámetro en la evaluación.
evaluarMayoriaEdad = (edad, pais) => (edad >= 18 && pais === "MX") ? `En ${pais} No eres mayor de edad` : `En ${pais}No eres mayor de edad`;
console.log("Evaluando la mayoria de edad en una persona en México...");
console.log(evaluarMayoriaEdad(edadPersona, "MX"));
console.log("Evaluando la mayoria de edad en una persona en USA...");
console.log(evaluarMayoriaEdad(edadPersona, "US"));

console.log("%c3.- SWITCH- CASE (elección por valor definido)", style_console);
//calculando tu generación en base a tu edad
let asignaGeneracion = (anioNacimiento) => {
    anioNacimiento = 2003;
    switch (true) {
        case (anioNacimiento < 1968):
            return "Baby Boomers";

        case (anioNacimiento = 1968 && anioNacimiento <= 1980):
            return "Generación X";

        case (anioNacimiento = 1981 && anioNacimiento <= 1993):
            return "Generación Y";

        case (anioNacimiento = 1994 && anioNacimiento <= 2010):
            return "Generación Z";
    }
}
console.log(`Dado que nació en el año 1997 soy de la generación ${asignaGeneracion(1982)}`);

console.log("%c4.- Manejo de Excepciones (TRY/ACTION)", style_console);

//En algunas ocasiones existieran errore que no son culpa del programa, sino del usuario, la red, el<so e incluso de un middleware, pero que sin duda debemos controlar para evitar fallas en la ejecución.

try {//intenta
    let result = 0 / 10;
    console.log(`Intentamos dividir 0/10, el resultado es: ${result}`);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}
try {//intenta
    let result = 10 / 0;
    console.log(`Intentamos dividir 10/0, el resultado es: ${result}`);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}
try {//intenta
    let a = "hola";
    let result = a / 10;
    console.log(`Intentamos dividir a/10, el resultado es: ${result}`);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}
try {//intenta
    let result = a / 10;//Dividir una variable no definida entre 10
    console.log(result);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}
try {//intenta
    let x = 8, y = 2, result = x / y;
    console.log(result);
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}
console.log("%c5.- Control de Ciclos (BREAK/CONTINUA)", style_console);

//En algunas ocasiones será importanate detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

console.log("Vamos a contar del 1 al 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Ahora necesitamso que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte...");

for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    } else {
        console.log(i);
    }
}

console.log("Ahora necesitamso que si llegas al 7 lo saltes y continues");
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        continue;
    } else {
        console.log(i);
    }
}

console.log("%c6.- Ciclo Iterativo (FOR)", style_console);

//Recorre de manera iterativa (i), de incremental y decremental

console.log("Los dias de la semana son: ");
let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
for (let i = 0; i < dias.length; i++) {
    console.log(`El ${i + 1} de la semana es: ${dias[i]}`);
}

console.log("Ahora vamos a imprimir los meses del año en forma descendente: ");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (let i = 11; i >= 0; i--) {
    console.log(`El ${i + 1} mes es: ${meses[i]}`);
}

console.log("%c6.- Ciclo Condicional (WHILE)", style_console);

//Estos ciclos (BUCLE) dependen de una condiciójn para continuar ejecutandose

let finDeSemana = false;
let mess = "";
let j = 0;
while (j<dias.length) {
    switch ( j ) {
        case 0:
            finDeSemana = true;
            mess = "Domingo de feminismo"
            break;
        case 1:
            finDeSemana = false;
            mess = "Lunes de esquizofrenia"
            break;
        case 2:
            finDeSemana = false;
            mess = "Martes de xenofobia"
            break;
        case 3:
            finDeSemana = false;
            mess = "Miercoles de machismo"
            break;
        case 4:
            finDeSemana = false;
            mess = "Jueves de racismo"
            break;
        case 5:
            finDeSemana = false;
            mess = "Viernes de homofobia"
            break;
        case 6:
            finDeSemana = true;
            mess = "Sábado de clasismo"
            break;
    }
if(!finDeSemana){
    console.log(`Día ${j+1}`);
    console.log(`Mensaje del día:  ${mess}`);
}
  
    j++;
}