/**
 * Condicional IF 
 */

let llueve = true;
if(llueve){
    console.log(llueve);
}

let admin = "admin";
if(admin="admin"){
    console.log("Bienvendo al sistema");
}
/**
 * Condicinal If else (Persona Mayor edad)
 */
const Mayor_de_Edad = 18;
if(Mayor_de_Edad>=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

let semaforo = "naranja";
/**
 * Condición Anidada IF else If eles ...(Semaforo)
 */
if(semaforo==='verde'){
    console.log("Continua avanzando")
}else if(semaforo==='amarillo'){
    console.log("Listo?")
}else if(semaforo==='rojo'){
    console.log("No avanzar");
}else{
    console.log("El color incorrecto");
}

/**
 * Switch (Casos en base a la expresión)
 */

let mes = 17;

switch(mes){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("Numéro del mes no valido");
        break;
}

let producto = 'MANZANA';
console.log(producto.toLowerCase());
switch(producto.toLowerCase()){
    case 'papaya':
        console.log("Precio de la papaya es de $20 kilo");
        break;
    case 'manzana':
        console.log("Precio de la manzana es de $35 kilo");
        break;
    case 'naranja':
        console.log("Precio naranja es de $40 kilo");
        break;
    case 'pera':
        console.log("Precio de peras es de $45 kilo");
        break;
    case 'mango':
        console.log("Precio del mango es $25 kilo");
        break;
        default:
            console.log("Producto no disponible");
        break;
}