// Repaso de Objetos
const bg ="linear-gradient(11deg,rgbs(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console =`backgroun:${bg};color:white; border-radius : 6px;padding:4px;font-sixe:1.0rem`

//Personalización de las salidas a Consola
console.warn("practica 05 : repaso de obejetos en Java Script")

//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);

//Declaramos valores independientes relacionadas a un PRODUCTO
let Producto_Nombre = "Computadora Gamer Laptop 17\"";
let Producto_Marca = "ASUS";
let Producto_Modelo = "TUF 17"
let Producto_Precio = 15749.50
let Producto_Disponibilidad = "true";
let Producto_SKU = Symbol("TUF707VV-HX221W");
let Producto_Stock = 15;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categoria = ["Electrónicos" , "Computación", "Gamming", "Promociones Buen Fin", "Mejor Valorados"];

// Accedemos a los valores de las caráteristicas del producto de manera independiente
console.log(`Los datos del producto son: \n
    Nombre: ${Producto_Nombre} , Tipo de dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de dato <${typeof(Producto_Disponibilidad)}>
    
    Stock: ${Producto_Stock}, Tipo de dato <${typeof(Producto_Stock)}>
    Imagen: ${Producto_Imagen}, Tipo de dato <${typeof(Producto_Imagen)}>
    Barcode: ${Producto_Barcode}, Tipo de dato <${typeof(Producto_Barcode)}>
    Categoria: ${Producto_Categoria}, Tipo de dato <${typeof(Producto_Categoria)}>
    `);

console.log("En el caso del SKU AL SER UN SYMBOL NO SE PUEDE CONCATENAR  A LA CADENA DE IMPRESIÓN ANTERIOR")
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));



// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto ", style_console)
let Producto =
{
    Nombre : "Tenis Deportivos",
    Marca: "Nike",
    Modelo : "Jordan ´24",
    Precio: 3361.25 ,
    Disponibilidade: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "../assets/products/sneakers/JORDAN.png",
    Barcode: null,
    Categorias: ["Deportes", "Juvenil"]
}


// Ahora leemos el objeto completo
console.table(Producto);

// Para accceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer

console.log("Accediendo a las propiedades especifícas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidade == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto_Stock} unidades disponibles`)

// Destructuración de Objetos
console.log("%c3.- Desctructuración de Objetos ", style_console)
let Producto2 =
{
    Clave: 316,
    Nombre : "Lentes Deportivos",
    Marca: "Oakley",
    Modelo : "QNTM Kato",
    Precio: 6829.00 ,
    Disponibilidade: true,
    Stock: 5,
    SKU: "OO0481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRed.png",
    Barcode: 888392491626,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}

let Comprador =
{
    Clave: 3216,
    Nombre: "Josue ",
    Apellidos: "Martinez Otero",
    Tipo: "Frecuente",
    Correo: "230166@utxicotepec.edu.mx",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido = {
    Producto_Clave: 316,
    Comprador_Clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de Compra"
}

// En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor
let {Producto_Precio: Precio} = Producto2;
let {Pedido_Cantidad: Cantidad} = Pedido;
let {Cliente_SaldoActual: SaldoActual} = Comprador;
let Costo_Compra = Producto_Precio * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de : ${Costo_Compra}`);
if (Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente");