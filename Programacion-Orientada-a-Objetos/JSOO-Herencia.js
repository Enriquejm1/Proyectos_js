class Mascota{
    constructor(params={}){
        ({
            nombre:this._nombre="Sin nombre",
            genero:this._genero="Sin genero",
            especie:this._especie="sin especie"
        }=params);
    }
     get nombre(){
            return this._nombre;
        }
        get genero(){
            return this._genero;
        }
        get especie(){
            return this._especie;
        }

        set nombre(name){
             this._nombre=name;
        }

        set genero(genero){
             this._genero=genero;
        }
        set especie(especie){
             this._especie=especie;
        }
        toString(){
            return "Mi nombre es "+this._nombre+" , soy un "+this._especie+" y tambien "+this._genero;
        }
}

class Gato extends Mascota{
    constructor(params={}){
        super({especie:"gato"});
    }
}

let benito = new Gato();
console.log(benito.nombre,benito.genero,benito.especie);
console.log(benito.toString());
benito.nombre="benito Bodoque";
benito.genero="macho";
console.log(benito.nombre,benito.genero,benito.especie);
console.log(benito.toString());