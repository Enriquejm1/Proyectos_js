/**
 * Imprimir la tabla del 2 al 12 utilizando los diferentes ciclos
 * For, While, Do-while
 */

let resultado = 1,i=1,j=1;
//Ciclo For
for(i=2;i<=12;i++){
   console.log("Tabla de Multiplicar del Numéro  "+i);
    for(j=1;j<=12;j++){    
        resultado = i*j;
        console.log(i+" x "+j+" = ",resultado);
    }
 }

//Ciclo while
resultado=1,i=1,j=1;
while(i<12){
   i += 1;
    while(j<=12){
        resultado = i*j;
        console.log(i+" x "+j+" = ",resultado);
        j += 1;
   }
   j=1;
}


// Do - While
do{
    i +=1;
  do{
    resultado = i*j;
        console.log(i+" x "+j+" = ",resultado);
        j += 1;
  }while(j<13);
  j = 1;
}while(i<12);

