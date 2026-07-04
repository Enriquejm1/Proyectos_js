

//Herencia 
function Animal(){
    Animal.prototype.name ="Animal";
    this.toString= function(){
        return this.name;
    }
}

function Mamifero(){}

var F = function(){}; //constructor temporal
F.prototype = Animal.prototype;
Mamifero.prototype = new F();

function Gato(color,genero){
    this.color = color;
    this.genero = genero;   
}
//Herencia
Gato.prototype = Mamifero.prototype;
//Modificamos el prototipo
Gato.prototype.name="Gato";
Gato.prototype.saludar = function(){
    return "Hola, son un "+this.name+" de color "+this.color+" y soy "+this.genero;
}

//Instancias
var benito = new Gato("Azul","Macho");
benito.name = "Benito";
var cucho = new Gato("Rosa","macho");
cucho.name="benito";

var animals = new Animal();
animals.name = "La bestia gold";

console.log(animals);

