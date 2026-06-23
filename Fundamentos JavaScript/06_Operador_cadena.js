/**
 * Operador cadena o concatenación
 * 
 */

var name = "Juan";
var lastname = "Perez";
let fullname = name + " "+lastname;
console.log(fullname);

//Operador condicional (Condición ?val1 : val2)
console.log(2<3? 'el numero  es mayor' : 'Es menor');

//Operador de desestructuración 
var persona = {
    nombre:'Enrique',
    apellido: 'Juarez',
}

var {nombre,apellido} = persona;
console.log(nombre);
console.log(apellido);
console.log(persona);

//Desestructuración de arreglos
var arreglo =[
    1,
    2,
    3,
    4,
    5    ];

var [primeraPosicion,segu] = arreglo;
console.log(primeraPosicion);
console.log(segu);

/**
 * Operador de miembro o acceso de propiedad
 */
//Notación punto
var persona = {
    name:'Gabril',
    lastname:'Angulo'
}
console.log(persona.name);
console.log(persona.lastname);

//Notación por corchetes
console.log(persona['name']); //Acceder por el nombre del campo
console.log(persona['lastname']);

//Notación por corchetes en arreglos
var arreglos = [11,12,13,14,15,16]; //Se empieza a contar desde 0.
console.log(arreglo[0]); //Acceder por la posición 
console.log(arreglo[1]);
console.log(arreglo[2]);

//Operación determinación de tipo(typeof)
console.log(typeof persona);
console.log(typeof name);
console.log(typeof arreglo);
console.log(typeof true);
console.log(typeof 23.5);






