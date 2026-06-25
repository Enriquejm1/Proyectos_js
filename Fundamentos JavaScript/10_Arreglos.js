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

var productos = [{
    nombre:'camisas',precio: 99},
    {nombre:'Zapatillas',precio:20,},
    {nombre:'pantalones',precio:25}
]

var productosImpuesto = productos.map((productos)=>{
    return {
        ...productos,
        tax:.12
    };
})
var precios = productos.map((productos)=>productos.precio);
console.log(productos);
console.log(productosImpuesto);
console.log(precios);

//Filter
var estuadiantes1 = [
    {nombre:'ada',edad:20,matriculado:true},
    {nombre:'beto',edad:24,matriculado:false},
    {nombre:'armando',edad:18,matriculado:true},
    {nombre:'arturo',edad:24,matriculado:false},
    {nombre:'leon',edad:20,matriculado:true},
] 
//var filtrar =  estuadiantes1.filter((estudiante)=> estudiante.edad>=21);
var filtrar =  estuadiantes1.filter((estudiante)=> estudiante.edad>=20 && estudiante.matriculado);
console.log(filtrar);


//reduce es inmutable
var calificaciones = [3,5,9,10,10];
var suma = calificaciones.reduce((acumulador,calificacion)=> acumulador + calificacion,0);
console.log(calificaciones);
console.log(suma);
console.log(suma/calificaciones.length);

var edades = [21,21,23,44,22,21,16,17,16,23];
//Salida

var resultado = edades.reduce((acumulador,edad)=>{
    if(!acumulador[edad]){
        acumulador[edad] = 1;
    }else{
        acumulador[edad] +=1;
    }
    return acumulador;
},{})
console.log(edades);
console.log(resultado);

var ventas = [
    {nombre:'camisa',precio:'15',total_camisas:10},
    {nombre:'zapatillas',precio:'20',total_camisas:8},
    {nombre:'pantalon',precio:'25',total_camisas:30},
];

resultado = 0;
resultado = ventas.reduce((acumulador,producto)=>{
    let totalVentas = producto.precio * producto.total_camisas;
    acumulador[producto.nombre] = `${totalVentas}`;
    return acumulador;
},{});

console.log(ventas);
console.log(resultado);

var estuadiantes2 = [
    {nombre:'ada',edad:20,matriculado:true},
    {nombre:'beto',edad:24,matriculado:false},
    {nombre:'armando',edad:18,matriculado:true},
    {nombre:'arturo',edad:24,matriculado:false},
    {nombre:'leon',edad:20,matriculado:true},
];

resultado = 0;
resultado = estuadiantes2
    .map((estuadiante)=> estuadiante.matriculado)
    .reduce((acumulador,item)=>{
        if(item){
        acumulador.matriculado+=1;
    }else{
            acumulador.noMatriculado +=1 ;
            
        }
        return acumulador;
    },{matriculado:0,noMatriculado:0});
console.log(estuadiantes2);
console.log(resultado);

//Some si alguno cumple con la condicion es verdadero.
var numeros = [1,2,3,4,5,6,7,8,9,10];
resultado = numeros.some((numero)=>numero%2 ===0);
console.log(resultado);

//every si todos los elementos del arreglo cumplen con esa condicion es verdadero.
numeros = [2,4,6,8,10];
resultado = numeros.every((num)=>num%2===0);
console.log(resultado);

//find 
var clientes = [
    {id:1,nombre:'ada'},
    {id:2,nombre:'Katerin'},
    {id:3,nombre:'andrea'},
    {id:4,nombre:'Michael'},
    {id:3,nombre:'Juan'}
];

var cliente = clientes.find((cliente)=> cliente.id===3);
var filter = clientes.filter((cliente)=> cliente.id===3);

console.log(clientes);
console.log(cliente);

console.log(filter);

//FindIndex
var clientes1 = [
    {id:1,nombre:'ada'},
    {id:2,nombre:'Katerin'},
    {id:3,nombre:'andrea'},
    {id:4,nombre:'Michael'},
    {id:3,nombre:'Juan'}
];

let pos = clientes1.findIndex((cliente)=>cliente.id===2);
console.log(pos);
console.log(clientes[pos]);

//Includes 
var mascotas = ['perro','gato','conejo'];
var resul = mascotas.includes('gato');
console.log(resul);
console.log('enrique'.includes('e'));

var buscador = (parametro) => {
    let clientesn = [
    {id:1,nombre:'ada'},
    {id:2,nombre:'Katerin'},
    {id:3,nombre:'andrea'},
    {id:4,nombre:'Michael'},
    {id:3,nombre:'Juan'}
];
return clientesn.filter((cliente)=>cliente.nombre.includes(parametro));
}

console.log(buscador('an'));


//Join 
var elementos = ['aire','fuego','agua','tierra'];
var res = elementos.join('|');
console.log(res);

var clientesO = [
    {id:1,nombre:'ada'},
    {id:2,nombre:'Katerin'},
    {id:3,nombre:'andrea'},
    {id:4,nombre:'Michael'},
    {id:3,nombre:'Juan'}
];
var csGeneraator = (array,separador='|')=>{
    let head = Object.keys(array[0]).join(separador);
    let data = array.map((element)=>Object.values(element).join(separador));
    console.log(head);
    data.forEach(element =>console.log(element))
}
csGeneraator(clientesO);

//Concat sort splice slice
//Concat

let array1=[11,21,31,14,15],array2=[6,7,8,9,100];
let array3 = array1.concat(array2);
console.log(array3);


//Sort ordenar
console.log(array3.sort());

var meses = ['may','Jul','Dic','Ene','Mar','Feb'];
console.log(meses.sort());

var arrays4 = [1,1000,21,30,4];
console.log(arrays4.sort());
var ordenarmenormayor= arrays4.sort((a,b)=>a-b);
console.log(ordenarmenormayor);

var ordenarmayormenor= arrays4.sort((a,b)=>b-a);
console.log(ordenarmayormenor);

//splice elimina o modifica un termino desde su posición
var nombre = ["Gabril",'Geovanny','Dayana'];
nombre.splice(1,1,'Pedro');
console.log(nombre);

//slice es inmutable
var nombre1 = ["Gabril",'Geovanny','Dayana'];
var resull = nombre1.slice(1,2); //no incluye la ultima posición
console.log(resull);
console.log(nombre1);



