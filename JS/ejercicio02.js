//Tipos de Datos en JS

// 1.Undefined - (NUll)
console.warn("--- Tipo de Dato UNDEFINED");
let cliente;
console.log (`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es :${typeof(cliente)}`);

cliente="Juan Romero";
console.log (`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es :${typeof(cliente)}`);

cliente=19227;
console.log (`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es :${typeof(cliente)}`);

//console.log (`El cliente ha realizado ${NumCompras} este mes`);
//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

//2.BOOLEAN - Boleanos- TRUE/FALSE (Falso/Verdadero)
console.warn("---Tipo de Dato: BOOLEAN (Boleano- True/False)");
let esPremium="No lo se";
console.log (`¿El cliente es Premium? ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es :${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable")
esPremium="ture";
console.log (`¿El cliente es Premium? ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es :${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable")
esPremium=true;
console.log (`¿El cliente es Premium? ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es :${typeof(esPremium)}`);

console.log("Asignando el valor false a la variable")
esPremium=0;
if(esPremium){
console.log ("El cliente pago por usar los servicios");
}else{
    console.log ("El cliente recibe los servicios gratuitos"); 
}

//3. NUMBER (Números)
var cantidad;
const costo_producto=10.50;
let saldo_cuenta=-2500.40;
let monto_transaccion;

console.warn("--- Tipo de Dato - NUMBER (Números,positivos,negativos,decimales,flotantes)");
console.log(`Tu saldo al día de hoy es de :${saldo_cuenta}, (Tipo de Dato ${typeof(saldo_cuenta)})`);
cantidad=8;
console.log(`Has elegido comprar:${cantidad} productos`);
console.log(`El importe total de la compra es: ${cantidad*costo_producto}`);
saldo_cuenta=saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu saldo nuevo es de ${saldo_cuenta}`);
//El cliente realiza un bono de 1500
monto_transaccion=1500;
console.log(`Tu monte de ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${monto_transaccion+saldo_cuenta}`);

//STRING (Cadena de Caracteres)
const alumno= "Yáred Amaury Romero";
let producto;

console.warn("---Tipo de dato - STRING (Cadena de Caracteres)");
console.log(`El nombre del alumno es: ${alumno}, que es de tipo de dato ${typeof(alumno)}`);

//Inicializamos el valor de la  variable producto
producto ="MONITOR 20\"FULL HD";
console.log(`El nombre del PRODUCTO es ${producto}, que es un tipo de dato ${typeof(producto)}`);

//Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando los métodos y funciones especificas, como convertir su valor a mayúsculas: ${alumno}=>${alumno.toUpperCase()}`);
console.log (`O en su defecto a minusculas: ${producto}=>${producto.toLowerCase()}`);


//5. BIGINT (Número de MAyor Amplitud)

console.warn("---Tipo de Dato - BIGINT (Número Amplio)");
const numeroGrande=1234567890;
const numeroGrande2=12345678901234567890;
let numeroGrande3=123456789012345678901234567890;
let numeroGrande4=1234567890123456789012345678901234567890;
console.log(`El primer experimento de un número grande es: ${numeroGrande}, que si es soportado por NUMBER,  y su tipo de dato es ${typeof(numeroGrande)}`);
console.log(`El segundo experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es ${typeof(numeroGrande2)}`);
console.log(`El tercero experimento de un número grande es: ${numeroGrande3}, que NO es soportado por NUMBER, perdiendo presición y su tipo de dato es ${typeof(numeroGrande3)}`);
console.log(`El cuarto experimento de un número grande es: ${numeroGrande4}, que NO es soportado por NUMBER, perdiendo presición y su tipo de dato es ${typeof(numeroGrande4)}`);

numeroGrande3=BigInt(123456789012345678901234567890);
numeroGrande4=BigInt(1234567890123456789012345678901234567890);

console.log(`El quinto experimento de un número grande es: ${numeroGrande3}, que ya fue convertido a BIGINT, y su tipo de dato es ${typeof(numeroGrande3)}`);
console.log(`El sexto experimento de un número grande es: ${numeroGrande4}, que ya fue convertido a BIGINT, y su tipo de dato es ${typeof(numeroGrande4)}`);

//¿Se pueden realizar operaciones matematicas entre un number y un bigint?
const numero=129;
console.log(`Intetando realizar la suma de: numer+numeroGrande3 el resultado es ${BigInt(numero)+numeroGrande3}`);

//6. SYMBOL (Símbolo)
console.warn("---Tipo de Dato - SYMBOL (Símbolo o único)");
const numero1=5;
const numero2=5.0;
const numero3="5";
const numero4="5.0";
const numero5=Symbol(5);
const numero6=Symbol(5);
const numero7=Symbol(5.0);
const numero8=Symbol("5");
const numero9=Symbol("5.0");
//Pruebas comparativas
console.log("¿Es igual 5 y 5.0?")
if(numero1==numero2){
    console.log(`Se comparó numero1 con numero2, determinando que tienen el mismo valor.`);
}else{
    console.log(`Se comparó numero1 con numero2, detrerminando que NO tienen el mismo valor.`);
}
//numero3

console.log("¿Es igual 5 y \"5\"")
if(numero1==numero3){
    console.log(`Se comparó numero1 con numero3, determinando que tienen el mismo valor.`);
}else{
    console.log(`Se comparó numero1 con numero3, detrerminando que NO tienen el mismo valor.`);
}

console.log("¿Es igual 5 y \"5.0\"")
if(numero1===numero3){
    console.log(`Se comparó numero1 con numero3, determinando que tienen el mismo tipo de DATO.`);
}else{
    console.log(`Se comparó numero1 con numero3, detrerminando que NO tienen el mismo tipo de DATO.`);
}
//numero4
console.log("¿Es igual 5 y \"5.0\"")
if(numero1===numero4){
    console.log(`Se comparó numero1 con numero4, determinando que tienen el mismo tipo de DATO.`);
}else{
    console.log(`Se comparó numero1 con numero2, detrerminando que NO tienen el mismo tipo de DATO.`);
}
//numero 5
console.log(`¿Es igual 5 y Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1: ${typeof(numero1)} y numero5: ${typeof(numero5)}`);
if(numero1===numero5){
    console.log(`Se comparó numero1 con numero5, determinando que tienen el mismo tipo de DATO.`);
}else{
    console.log(`Se comparó numero1 con numero5, detrerminando que NO tienen el mismo tipo de DATO.`);
}
//numero 6
console.log(`¿Es igual 5 y Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1: ${typeof(numero1)} y numero5: ${typeof(numero5)}`);
if(numero1===numero6){
    console.log(`Se comparó numero1 con numero5, determinando que tienen el mismo tipo de DATO.`);
}else{
    console.log(`Se comparó numero1 con numero5, detrerminando que NO tienen el mismo tipo de DATO.`);
}

// 7. NULL
console.warn("--- Tipo de dato - NULL (Nulo o vacío)");
//El tipo de adato se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacío, bajo su consentimiento, a diferencia de UNDEFINED que es un valor desconocido por DEFAULT por JS.

let nombreUsuario=null;
let passUsuario=null;
let generoUsuario=null;
let estatusRelacionSentimental=null;
let fecha_ultimoPost;


//Supongamos que estamos programando una Red Social, tipo facebook, en la que parte la información se publicará en el perfil del usuario.

//Si el usuario no ha iniciado sesión em el dispositivo móvil o en la aplicación web, puede explorar contenido de acceso ppúblico, y no existirá información para mostrar.

//en la HU (Historia de Usuario), que el usuario desea logearse deberá ingresar su número telefónico o correo electrónico y una contraseña que deberemos guardar en las variables previamente declaradas.

//Supongamos que el usuario Amaury con correo electronico amaury210@gmail.com desea ingresar su contraseña pas: pass1234

nombreUsuario="amaury21@gmail.com";
passUsuario="pass1234";

//en este momento de ejecución del sistema no sabemos su género, ni su estatus de relación sentimental.

console.log(`El usuario ${nombreUsuario} esta intentando logearse con una contraseña de: ${passUsuario}`);

//Lo que prosigue es que el sistema contejará los datos ingrersados con la base de datos y en caso de que los datos sean correctos comenzará la sesión en la plataforma actualizando estos valores.

//Dado que amaury ed del genero masculino, y denota que su estatus de relación no ha sido capturado o lo mantiene privado esto genera la actualización de los valores de las variables.

generoUsuario="M";
estatusRelacionSentimental=null;

console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su información de perfil podemos deducir que es del genero ${generoUsuario} y que su estatus es ${estatusRelacionSentimental} y su última publicación la realizó el: ${fecha_ultimoPost}`);

//Comparando Null vs Undefined

console.log("Comparación de la equidad entre undefined y null:");
console.log(
    (fecha_ultimoPost==estatusRelacionSentimental)?
    "Ambas Variables tienen el mismo valor":
    "Las ariables no tienen el mismo valor"
);

console.log("Comparación de la identidad entre undefined y null");
console.log(
    (fecha_ultimoPost===estatusRelacionSentimental)?
    "Ambas Variables tienen el mismo valor y el mismo tipo de dato":
    "Las variables tienen el mismo valor, pero no el mismo tipo de dato"
);