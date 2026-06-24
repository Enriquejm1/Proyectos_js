/**
 * Escribre un programa que según el día de la semana ingresado proporcione 
 * el día en inglés.
 */

let day, day_today="domingo";

if(day_today.toLocaleLowerCase()=='lunes'){
    day = "Monday";
}else if(day_today.toLocaleLowerCase()=='martes'){
    day = "Thurday";
}else if(day_today.toLocaleLowerCase()=='miercoles'){
day = "Wednesday";
}else if(day_today.toLocaleLowerCase()=='jueves'){
day = "Tuesday";
}else if(day_today.toLocaleLowerCase()=='viernes'){
day = "Friday";
}else if(day_today.toLocaleLowerCase()=='sabado'){
day = "Saturday";
}else if(day_today.toLocaleLowerCase()=='domingo'){
day = "Sunday";
}
console.log("El dia "+ day_today+" en inglés es "+day);
day_today= 'viernes';
switch(day_today.toLowerCase()){
    case 'lunes':
        day = "Monday";
        break;
    case 'martes':
        day = 'Thurday';
        break;
    case 'miercoles':
        day = "Wednesday";
        break;
    case 'jueves':
        day = 'Tuesday';
        break;
    case 'viernes':
        day = 'Friday';
        break;
    case 'sabado':
        day = 'Saturday';
        break;
    case 'domingo':
        day = 'Sunday';
        break;
    default:
        day = "No reconocido";
        break;
}
console.log("El dia "+ day_today+" en inglés es "+day);

/**
 * Escribir un programa que segun el total de la compra, se agregue un valor de envio.
 * 
 * Si la compra es menor o igual a los $10 se agregará un gasto de envio de $3
 * Si la compra es menor o igual a los $20 y mayor a $10 se agregará un gasto de envio de $5
 * Si la compra es menor o igual a los $50 y mayor a $20 se agregará un gasto de envio de $7
 * Si la compra supera los $50 el gasto de envio será gratis
 *
 */

//If else
let total_compras = 15.6;
let total_final=0;
if(total_compras<=10 && total_compras>0){
    total_final = total_compras + 3;
    console.log("El Envio es de $3 USD");
}else if(total_compras<=20 && total_compras>10){
    total_final = total_compras + 5;
    console.log("El Envio es de $5 USD");
}else if(total_compras<=50 && total_compras>20){
    total_final = total_compras + 7;
    console.log("El Envio es de $7 USD");
}else if(total_compras>50){
    total_final = total_compras+0;
    console.log("El Envio es gratis");
}
console.log("El total más el envio es de: "+total_final);

