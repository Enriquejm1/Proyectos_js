/**
 * Ciclos en Javascript
 * Son estructuras para repetir instrucciones que cumplen una condición
 */

//While
let i = 0,x = 5;
while(i<=10){
   i += 1; // i = i + 1;
   x = x + i+ 5;
   console.log(x);
   console.log(i);
}
console.log("Valor final de x es "+x);

//Do while (Si la condición es verdadera se vuelve a repetir el ciclo)
let contador =0;
do{
  console.log(contador%2);
  contador += 1;
}while(contador%2 != 0 );
console.log("El numero par es: "+contador);

//For 
for(i=1;i<=10;i++){
    if(i%2==0){
        console.log("El numero "+i+" es par");
    }else{
        console.log("El numero "+i+" es par");
    }
}
let persona = {
    name:'Juan',
    lastname: 'pedroza',
    age:23
}

//For-in 
for(let clave in persona) {
    //Instrucciones
    console.log(clave);
    console.log(persona[clave]);
}


var arreglo = [1,2,3,4,5];

//For-of
for(let valor of arreglo){
    console.log(valor);
}

var nombre = "Esteban";
for(let letra of nombre){
    console.log(letra);
}