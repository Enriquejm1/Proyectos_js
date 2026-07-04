//Funciones 
//Funcion 
function sumaNumeros(){
    //Prototype
    //arguments
    //call y apply
    let i, tot = 0;
    let numeros = arguments.length;
    for(i=0;i<numeros;i++){
        tot +=arguments[i];
    }
    return tot;
}

let resul = sumaNumeros(2,4,5,6);
console.log(resul);

//Función anonima
let saludar = function(hora){
    let mensaje = "";
    if(saludar>=22 ||hora<=5){
        mensaje ="Buenas noches";
    }else{
        mensaje = "Buenos dias";    }
        return mensaje;
}
console.log(saludar(10));

//Funciones callback
function invoca(a,b){
  return a()+b(); 
}
function numeuno(num){
    let nume = Number(num);
    return 1;
}
function numetwo(num){
    let nume = Number(num);
    return 2;
}
console.log(invoca(numeuno,numetwo)); //Funciones como parametro


//Funciones que se auto invoquen
//Funcion anonima
(
function (mensaje){
console.log("Mensaje: "+mensaje);
})("Hola Mundo en una funcion que se auto invoca")

//Funciones anidadas, funciones dentro de funciones.
function a(num1,nu){
    function b(entrada,num){
        return entrada*2*num;
    }
    return "Resultado es: "+b(num1,nu);
}
console.log(a(23,3));

//Funciones que regresan otra funcion
function mensaje(){
    console.log("Hola");
    return function(){
        console.log("Mundo dos");
    };
}

let x = new mensaje(); //Se invoca como un objeto para mostrar el mensaje dos (instancia)
x();

//Redefinir una función
function mensaje2(){
    console.log("Hola");
    return function(){
        console.log("Adios");
    };
}
mensaje2=mensaje2();//Redefinir la función 
mensaje2();

//Metodos call y apply ambas sirven para llamar a otra funcion
function producto(a,b){
    return a*b;
}
var obj1 = producto.call(obj1,7,5);//llama a la funcion
console.log(obj1);
var obj = producto.apply(obj,[3,5]);
console.log(obj);
