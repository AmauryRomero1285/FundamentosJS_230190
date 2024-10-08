//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(129,50,36,1) 0%, rgba(155,129,26,1) 23%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Prática 07: Arreglos en Java Script")

console.log("%c1.- Sí/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso
let fechaActual = new Date(2024,1,6);
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
if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es:${fechaLocalMX}`);

// Existe un extensor de la sentencia if(sí) que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primer mitad del año.`);
else
   console.log(`estas en la segunda mitad del año.`);

//Que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera= new Date(anio, 2, 21);    
let inicioVerano= new Date(anio, 5, 21);  
let inicioOtonio= new Date(anio, 8, 23);
let inicioInvierno= new Date(anio, 11, 21);  

let horarioVerano = false;

if(fechaActual >= inicioPrimavera && fechaActual<= inicioVerano)
{
    console.log("Estamos en PRIMAVERA...");
    console.log("Inicia la floración de muchas plantas");
console.log("Los dias son más largos y las noches más cortas");
console.log("Muchos animales despiertan de la invernación");
console.log();
estacion="Primavera";
horarioVerano=true;
} 
else if(fechaActual >= inicioVerano && fechaActual< inicioOtonio)
{
    console.log("Estamos en OTOÑO...");
    console.log("Los arboles suelen cambiar de follaje");
console.log("Se registran temperaturas más templadas");
console.log("Los animales comienzan con la recolección de alimeto y preparan sus espacios para la hibernación, incluso algunas aves migran");
estacion="Verano";
horarioVerano=true;

}else{

    console.log("Estamos en INVIERNO...");
    console.log("En esta temporada los dias son más cortos y las noches más largas");
console.log("En algunas regiones suele nevar");
console.log("Dado las bajas tempersturas, se recomienda abrigarse");
estacion="Invierno";
horarioVerano=true;
}

console.log("%c2.- Operdaor Ternario (validación?cumple.no_cumple)", style_console);
//En javaScript existia una operación simplificada que valida si una condición se cumple o no, y que hacer en cada caso

const edadPersona=18;
const mayorEdadMX=18;
const mayorEdadUS=21;
let evaluarMayoriaEdad=(edad)=> edad>18 ?"Eres Mayor de edad":"No eres mayor de edad"

console.log("Evaluando la mayoria de edad en una persona...");
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestines legales, por lo que debemos considerar un segundo parámetro en la evaluación.
evaluarMayoriaEdad=(edad,pais)=>(edad>=18 && pais==="MX")?`En ${pais} No eres mayor de edad`:`En ${pais}No eres mayor de edad`;
console.log("Evaluando la mayoria de edad en una persona en México...");
console.log(evaluarMayoriaEdad(edadPersona,"MX"));
console.log("Evaluando la mayoria de edad en una persona en USA...");
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.- SWITCH- CASE (elección por valor definido)", style_console);
//calculando tu generación en base a tu edad
let asignaGeneracion=(anioNacimiento)=>{
anioNacimiento=2003;
switch(true){
case(anioNacimiento<1968):
    return "Baby Boomers";

    case(anioNacimiento=1968 && anioNacimiento<=1980):
    return "Generación X";

    case(anioNacimiento=1981 && anioNacimiento<=1993):
    return "Generación Y";

    case(anioNacimiento=1994 && anioNacimiento<=2010):
    return "Generación Z";
}
}
console.log(`Dado que nació en el año 1997 soy de la generación ${asignaGeneracion(1982)}`);