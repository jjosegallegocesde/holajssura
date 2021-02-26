//Condicionales

//1. Función SI SIMPLE
//let edad=17.5;

/*Para saber si ina persona
es mayor de edad en colombia
debo comparar la edad de la persona
con el número 18*/

/*if(edad>=18){
    console.log("Usted es mayor de edad");
}else{
    console.log("Usted es menor de edad");
}*/

//2. Condicionales anidados o compuestos
let edad=80;
let ciudad="MEDELLIN";

/*Si mi edad es menor o igual a 28 soy un joven
  si mi edad es menor igual  a 60 soy un adulto
  si mi edad es mayor o igual a 60 soy adulto mayor
*/

if(edad<=28){
    console.log("Usted es JOVEN");

}else if(edad>28 && edad<=60){
    console.log("Usted es ADULTO");

}else{
    console.log("Usted es un adulto mayor");
}