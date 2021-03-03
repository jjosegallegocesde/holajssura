//ENTRADAS
let nombreCliente="PEDRO PARAMO";
let documentoCliente="12345678";

const DESCUENTOESTRATO1=0.4;
const DESCUENTOESTRATO2=0.3;
const DESCUENTOESTRATO3=0.2;

let valorDeuda=10;
let estrato="1";

//PROCESO
if(estrato=="1"){

    let valorDescuento=valorDeuda*DESCUENTOESTRATO1;
    valorDeuda=valorDeuda-valorDescuento;
    //SALIDA
    console.log("El valor de la nueva deuda es de: "+valorDeuda);

}else if(estrato=="2"){
    let valorDescuento=valorDeuda*DESCUENTOESTRATO2;
    valorDeuda=valorDeuda-valorDescuento;
    //SALIDA
    console.log("El valor de la nueva deuda es de: "+valorDeuda);
}else if(estrato=="3"){
    let valorDescuento=valorDeuda*DESCUENTOESTRATO3;
    valorDeuda=valorDeuda-valorDescuento;
    //SALIDA
    console.log("El valor de la nueva deuda es de: "+valorDeuda);
}else{
    console.log("no tiene derecho a descuento");
}



