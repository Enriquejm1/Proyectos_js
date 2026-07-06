const MAX_CUADRO = 2;
const TIEMPO = 500;

class SplashScreen{
    #contenedor = document.createElement("div");
    #idAnimacion = null;
    crear(){
        const estilos = document.createElement("style");
        estilos.innerHTML= `
        .splashscreen{
        background: blue;
        width:650px;
        height:650px;
        border:1px solid black;
        background:url(img/Attack-1.png) no-repeat;
        }
        .splashscreen-1{
        background-position-x:0;
        }
        .splashscreen-2{
        background-position-x:-650px;
        }
        ;`
        document.head.appendChild(estilos);
        this.#contenedor.classList.add("splashscreen","splashscreen-1");
        const raiz = document.getElementById("root");
        raiz.appendChild(this.#contenedor);
        // raiz.className="splashscreen";
        //raiz.innerText = "inicio del juego...";
        this.#animacion();
    }
    eliminar(){
        
    }
    #animacion(){
        let cuadro = 1;
        const animacion = ()=>{
            this.#contenedor.classList.remove(`splashscreen-${cuadro}`);
            cuadro++;
            if(cuadro>MAX_CUADRO){
                cuadro=1;
            }
            this.#contenedor.classList.add(`splashscreen-${cuadro}`);
        }
        this.#idAnimacion = setInterval(animacion,TIEMPO);
    }
}