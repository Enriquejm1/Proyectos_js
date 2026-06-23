/*
--Variables 
-- 3 Formas de definir variables
-- var
-- let
-- const
*/

/*Variables con VAR
Esta variable es a nivel global dentro del archivo
*/
var nombre = 'Enrique'; 
console.log(nombre);

var edad = 25; // Definir variable e inicializamos
var total = 96.8;
//Este es un objeto 
var persona = {
    name:"Ezequiel Jackson",
    phone:7223213,
    age:27,
    adress:{
        calle:"Hacienda buena vista",
        id:23,
    },
    VisitedCity:['Guanayaquil','Cuenca','Manta'],
}
console.log(persona);
var ciudad;
ciudad = 'Quito';
console.log(ciudad);
ciudad = 'Verenites';
console.log(ciudad);

/*variable con let 
Este funciona de forma local dentro de una sección o bloque del codigo 
dentro del archivo.
*/
let telephone = 7223383838;
console.log(telephone);

//Variables Const
const Numero_PI = 3.1416;
console.log("El numero PI es:"+Numero_PI);

var saludos = `Hola soy :${nombre}`;
console.log(saludos);








