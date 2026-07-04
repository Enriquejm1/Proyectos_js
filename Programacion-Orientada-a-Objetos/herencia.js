//Herencia 
function Animal(){
    this.name ="Animal";
    this.toString= function(){
        return this.name;
    }
}
function Mamifero(){
    this.name ="Mamifero";
}

function Gato(color,genero){
    this.name ="Gato";
    this.color = color;
    this.genero = genero;
    this.saludar = function(){
        return "Hola, son un "+this.name+" de color "+this.color+" y soy "+this.genero;
    }
}
//Herencia
Mamifero.prototype = new Animal();
Gato.prototype = new Mamifero();
//Instancias
var benito = new Gato("Azul","Macho");
console.log(benito.saludar());
console.log(benito.toString());




