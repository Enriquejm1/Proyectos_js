/**
 * Funciones
 */

//Funciones declarativas
//Esta es conocida como procedimiento
function nombre_funcion(){
    console.log("Hola Mundo");//Cuerpo de la función
}

nombre_funcion();
//Esta es un procedimiento con dos valores de entrada
function sumar(num1,num2){
    let r = num1+num2;
    console.log("La suma es:"+r);
}
sumar(12,8);

//Esta es una función con un parametro de entrada y regresa un valor de verdadero o falso segun el resultado de la condición
function num_par(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
let num = 23;
console.log("El numero "+num+ " es par :",num_par(num));

//Funciones de Expresión
var resultado = function(num1,num2){
    let n = num1+num2;
    return n;
}
console.log(resultado(23,22));

//Función Flecha 
var resta = (n1,n2)=>{
    if(typeof n1 ==='number' && typeof n2 ==='number'){
     return n1-n2;
    }else{
        return "Ingresa solo numeros";
    }
   
}
console.log(resta(22,8));

var mult = (a,b)=> a*b;
console.log(mult(2,3));


