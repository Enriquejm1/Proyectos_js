class FinJuego{
    #finJuego = document.createElement("div");
    #idAnimacion = null;
    crear(){
        const estilos = document.createElement("style");
        estilos.innerHTML= `
        .finJuego{
        width:650px;
        height:650px;
        border:1px solid black;
        background:url(img/finJuego.png) no-repeat;
        }
        .finJuego-1{
        background-position-x:0;
        }
        .finJuego-2{
        background-position-x:-650px;
        }
        ;`
        document.head.appendChild(estilos);
        contenedor.remove();
        this.#finJuego.className ="finJuego finJuego-1";
        const raiz = document.getElementById("root");
        raiz.appendChild(this.#finJuego);
        this.#animacion();
    }
    #animacion(){
        let cuadro = 1;

        const animacion = ()=>{
            this.#finJuego.classList.remove(`finJuego-${cuadro}`);
            cuadro++;
            if(cuadro>MAX_CUADRO){
                cuadro=1;
            }
            this.#finJuego.classList.add(`finJuego-${cuadro}`);
        }
        this.#idAnimacion = setInterval(animacion,TIEMPO);
    }
}