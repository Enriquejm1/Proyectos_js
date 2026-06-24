/**
 * Manioulación de arreglos
 */

//ForEach
var letras = ['a','b','c','d'];
console.log(letras.length);
//Forma clasica
for(let i =0;i<letras.length;i++){
    let element = letras[i];
    console.log(element);
}
//ForEach este permite recorrer los elementos de un arreglo
letras.forEach((elemento)=>{
    console.log(elemento);
})

//push -- shift --pop
//Agregar un elementos al arreglo letras.
letras.push('e');

//ForEach este permite recorrer los elementos de un arreglo
letras.forEach((elemento)=>{
    console.log(elemento);
})

//Optiene el primer elemento del arreglo y modifica el arreglo
let primer=letras.shift();
console.log(primer);
console.log(letras);
//Optiene el ultimo elemento del arreglo y modifica el arreglo

let ultimo =letras.pop();
console.log(ultimo);
console.log(letras);

//Map retorna un arreglo transformado a los datos utilizados
var estuadiantes = ['Alex','Alberto','Katrina','Pablo'];
var asistencia = estuadiantes.map((nombre)=>{
    return {
        nombre: nombre,
        asistencia:false
    }
});
console.log(estuadiantes);
console.log(asistencia);

