//ENTRADAS DEL PROBLEMA

//1. Datos del usuario
let nombreUsuario="Juan Gallego";
let correoUsuario="juan.gallegomesa@gmail.com";
let telefonoUsuario="3225962363";
let direccionUsuario="cll 80#30a-20";
let metodoPagoUsuario="Crédito";

//2. Datos de la tienda
let nombreTienda="Tortas DELI SAS";
let direccionTienda="cll 100 sur # 90-3";
let telefonoTienda1="8945674";
let telefonoTienda2="3506545123";
let tipoRestaurante="POSTRES";

//3. Datos del producto
let nombreProducto="Torta de chocolate-Mediana";
let cantidadProducto=2;
let precioIndividualProducto=35000;

//4. Datos del envio
const COSTOENVIO=10000;
const IVA=0.19;
let nombreRepartidor="PEPITO PEREZ";
let descuento=0.1;
let costoTotalCompra=0;

//PROCESO
let costoInicial= precioIndividualProducto*cantidadProducto;
let valorIVA= costoInicial*IVA;
let valorDescuento= costoInicial*descuento;

costoTotalCompra=costoInicial+valorIVA-valorDescuento+COSTOENVIO;

//SALIDAS
console.log(`Señor usuario ${nombreUsuario}:`);
console.log("......................");
console.log(`${nombreTienda}`);
console.log(direccionTienda);
//
//
//
//
//
//
console.log(`Gran Total: ${costoTotalCompra}`);

console.log(nombreUsuario);
console.log(`${nombreUsuario}`);


