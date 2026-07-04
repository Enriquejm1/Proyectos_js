//Propiedad prototype
function producto(num1,num2,num3){
    return num1*num2*3;
}
console.log(producto.length);//Numero de parametros
console.log(typeof producto);
console.log(typeof producto.prototype); //Es un objeto
producto.prototype = {};


function Libro(titulo,nombre,apellido,paginas){
    this.titulo = titulo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.paginas = paginas;
    this.calificacion = 10;
    this.info = function() {
        let cadena = this.titulo+" , "+this.nombre+" , "+this.apellido;
        return cadena;
    }
}

Libro.prototype.precio = 100;
Libro.prototype.calificacion = 5;
Libro.prototype.rating = function(){
    return "Calificacion:"+this.calificacion + " estrellas";
}
//Instancias 
var libron = new Libro("El poder del amor","Sara","Vega",200);
var libron2 = new Libro("100 años de soledad","Gabriel","Garcia",200);

console.log(libron.rating());
console.log(libron2.rating());
//Modificamos el prototipo
Libro.prototype.get = function(parametro){
    console.log(this[parametro]);
}
libron.get("titulo");
libron2.get("titulo");
//desplegar las propiedades
console.log(libron.precio);
console.log(libron.calificacion);
console.log(libron.hasOwnProperty("precio"));
console.log(libron.hasOwnProperty("calificacion"));
delete libron.calificacion; //Eliminar
console.log(libron.hasOwnProperty("calificacion"));

libron.precio = 250;
libron2.precio = 99;
console.log(libron.precio);
console.log(libron2.precio);
console.log(libron.calificacion);
console.log(libron.toString());


for(var prop in libron){
    if(!libron.hasOwnProperty(prop)){
    console.log(prop+":"+libron[prop]);
    }
    console.log(libron.propertyIsEnumerable("precio"));
}




