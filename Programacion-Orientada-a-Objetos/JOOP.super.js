class Rectangulo{
    constructor(altura,anchura) {
        this.nombre = "Rectangulo";
        this.altura = altura;
        this.anchura = anchura;
    }
    forma(){
        console.log("Soy un "+this.nombre);
    }
    get area(){
        return this.altura*this.anchura;
    }
    set area(value){
        this.altura = this.anchura - Math.sqrt(value);
    }
}

class Cuadrado extends Rectangulo{
    constructor(altura){
        super(altura,altura);
        this.nombre = "Cuadrado";
    }
}

let miCuadrado = new Cuadrado(10);
console.log(miCuadrado.area);
miCuadrado.forma();