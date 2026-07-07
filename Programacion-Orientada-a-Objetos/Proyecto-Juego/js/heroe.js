class Personaje{
    x=1;
    y=1;
    #personaje = document.createElement("div");
    #direccion = null;
    #cuadro = 1;
    #idAnimacion = null;
    crear(){
        const estilos = document.createElement("style");
        estilos.innerHTML=`
        .heroe{
        position:absolute;
        background:url(/img/png/p1.png);
        height:50px;
        width:50px;
        top:0;
        transition:transform 300ms;
        }
        .derecha-1{
        background:url(/img/png/derecha-1.png);
        }
        .derecha-2{
        background:url(/img/png/derecha-2.png);
        }
        .derecha-3{
        background:url(/img/png/derecha-3.png);
        }
        .derecha-4{
        background:url(/img/png/derecha-4.png);
        }
        .izquierda-1{
        background:url(/img/png/izquierda-1.png);
        }
        .izquierda-2{
        background:url(/img/png/izquierda-2.png);
        }
        .izquierda-3{
        background:url(/img/png/izquierda-3.png);
        }
        .izquierda-4{
        background:url(/img/png/izquierda-4.png);
        }
        .arriba-1{
        background:url(/img/png/derecha-1.png);
        }
        .arriba-2{
        background:url(/img/png/derecha-2.png);
        }
        .arriba-3{
        background:url(/img/png/derecha-3.png);
        }
        .arriba-4{
        background:url(/img/png/derecha-4.png);
        }
        .abajo-1{
        background:url(/img/png/izquierda-1.png);
        }
        .abajo-2{
        background:url(/img/png/izquierda-2.png);
        }
        .abajo-3{
        background:url(/img/png/izquierda-3.png);
        }
        .abajo-4{
        background:url(/img/png/izquierda-4.png);
        }
        `
        
        ;
        document.head.appendChild(estilos);
        this.#personaje.classList.add("heroe");
        this.#personaje.style.transform = `translate(${this.x*50}px,${
            this.y*50
        }px)`;
        const raiz = document.getElementById("root");
        raiz.appendChild(this.#personaje);
    }
    eliminar(){
        this.#personaje.remove();
    }
    mover(direccionNueva){
    this.#direccion=direccionNueva;
    this.#actualizar();
    return;
    

    switch(direccionNueva){
        case direccion.IZQUIERDA:{
            this.x = this.x -1;
            break;
        } 

        case direccion.DERECHA:{
            this.x = this.x +1;
            break;
        } 

        case direccion.ARRIBA:{
            this.x = this.y -1;
            break;
        }
        
        case direccion.ABAJO:{
            this.x = this.y +1;
            break;
        }
    }
this.#actualizar();
    }
    #actualizar(){
        this.#cuadro = 1
        if(this.#idAnimacion!=null){
            window.clearInterval(this.#idAnimacion);
        }
        const animacion=()=>{
            this.#personaje.className = "heroe";
            this.#personaje.classList.add(`${this.#direccion}-${this.#cuadro}`);
            this.#personaje.style.transform = `translate(${this.x*50}px,${
        this.y*50
    }px)`;
    if(this.#cuadro>MAX_CUADROS_PERSONAJES){
        this.#cuadro=1;
        this.#personaje.className="heore";
        this.#personaje.classList.add(`${this.#direccion}-${this.#cuadro}`);
        window.clearInterval(this.#idAnimacion);
        this.#idAnimacion=null;
    }
        }
    this.#idAnimacion = setInterval(animacion,200);
 /* */
    }
     inicio(){
    this.x=1;
    this.y=1;
    this.#personaje.style.transform = `translate (${this.x*50}px,${
        this.y*50
    }px)`;
   }
  
}