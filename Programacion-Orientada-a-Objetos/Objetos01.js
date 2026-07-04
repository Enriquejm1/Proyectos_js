//Definición de un objeto 
// Por llaves
var alumno  ={
    nombre:"James",
    apellido:"headfield"
}
// Por Constructor, La primera letra de un constructor o metodo de clase, va en Mayusculas
function Profesor(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}
var profesorMat = new Profesor("Juan","Perez",40); //instancia del objeto 
//Por palabra reservada (new) 
var director = new Object();
director.nombre="Pedro";
director.apellido="Picadro";
director.edad = 45;

//Objeto dentro de un objeto
var libro = {
    titulo:"EL quijote de la mancha",
    paginas:600,
    editorial:"Diana",
    autor:{
        nombre:"Marta",
        apellido:"Perez"
    }
}
console.log(libro.titulo);
console.log(libro["paginas"]);
console.log(libro["autor"].nombre);
console.log(libro.autor["apellido"]);
console.log(libro["autor"]["apellido"]);
console.log(libro.autor.apellido); //Se recomienda esta sintaxis a utilizar

//Agregar elementos al objeto
var libro_completar = {};
libro_completar.titulo = "El quijote de la mancha";
libro_completar.autor = {nombre:"Arcel",apellido:"Fuentes"};
libro_completar.paginas = 600;
libro_completar.info = function(){
    var cadena = this.titulo+" , "+this.autor.nombre+" "+this.autor.apellido;
    return cadena;
}
//Eliminar elementos al objeto
console.log(libro_completar.info());
delete libro_completar.paginas;
console.log(libro_completar.paginas);
//Se elimno el elemento por eso muestra indefinido 

//Este es un constructor
function Libro(titulo,nombre,apellido,paginas){
    this.titulo = titulo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.paginas = paginas;
    this.info = function() {
        let cadena = this.titulo+" , "+this.nombre+" , "+this.apellido;
        return cadena;
    }
}

var libron = new Libro("El poder del amor","Sara","Vega",200);
var libron2 = new Libro("100 años de soledad","Gabriel","Garcia",200);

console.log(libron.info());
console.log(libron2.info());
