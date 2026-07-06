//Esta es una clase
class Gato{  
    constructor(pelo,nombre){
    this._pelo = pelo;
    this._name = nombre;   
}
//Muestra el valor del atributo
get Pelo(){
    return this._pelo;
}
get nombre(){
    return this._name;
}
//El set modifica el valor del atributo
set Pelo(newpelo){
   this._pelo=newpelo;
}
set nombre(newName){
this._name=newName;
}
toString(){
    return this._name+" tiene el pelo de color "+this._pelo;
}
}
var gato1 = new Gato("Naranja","Garfiel");
var gato2 = new Gato("gris y blanco","Tom");
console.log(gato1.toString());
console.log(gato2.toString());
//Modificaq valor del atributo
gato1.nombre="Rey Garfield";
console.log(gato1.toString());
gato2.Pelo="Azul y blanco";
console.log(gato2.nombre);
console.log(gato2.Pelo);
console.log(gato2.toString());//Muestra el valor del atributo

//Metodos estaticos
class Perro{
    static dice(){
        return "Los perros dicen wow";
    }
}
console.log(Perro.dice());