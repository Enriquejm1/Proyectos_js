
class Tablero{
#contenedor = document.createElement("div");
#idAnimacion = null;
    crear(){
        const estilos = document.createElement("style");
        estilos.innerHTML= `
        .tablero{
        background: blue;
        width:650px;
        height:650px;
        background:url(img/tablero.png) no-repeat;
        }
        .celda{
        width:50px;
        height:50px;
        float:left;
        }
        .pared{
        background:url(img/objetos/Crate.png) no-repeat;
        }
        .piedra{
        background:url(img/objetos/Stone.png) no-repeat;
        }
        .arbusto{
        background:url(img/objetos/Bush.png) no-repeat;
        }
        .hongo{
        background:url(img/objetos/Mushroom.png) no-repeat;
        },
        .personaje{
        background:url(img/personaje.png) no-repeat;
        }
        .bomba{
        background:url(img/objeto/bomba.png) no-repeat;
        }
        .bomba-1{
        background:url(img/objeto/explosion.png) no-repeat;
        background-position-x:-10px;
        }
        .bomba-2{
        background:url(img/objeto/explosion.png) no-repeat;
        background-position-x:-60px;
        }
        .bomba-3{
        background:url(img/objeto/explosion.png) no-repeat;
        background-position-x:-120px;
        }
        .bomba-4{
        background:url(img/objeto/explosion.png) no-repeat;
        background-position-x:0;
        background-position-x:-50px;
        }
        .bomba-5{
        background:url(img/objeto/explosion.png) no-repeat;
        background-position-x:-60px;
        background-position-x:-50px;
        }
        .bomba-6{
        background:url(img/objeto/explosion.png) no-repeat;
        background-position-x:-120px;
        background-position-x:-50px;
        }
        .bomba-7{
        background:url(img/objeto/explosion.png) no-repeat;
        background-position-x:-120px;
        background-position-x:-50px;
        }
        `;
        var a,b;
        document.head.appendChild(estilos);
        this.#contenedor.classList.add("tablero");
        a= document.createAttribute("id");
        a.value="contenedor";
        this.#contenedor.setAttributeNode(a);
        const raiz = document.getElementById("root");
        raiz.appendChild(this.#contenedor);
        //this.#contenedor.appendChild(celda);
        var i=0; var a,b;
        for(var r=0;r<MAX_RENGLONES;r++){
            for(var c=0;c<MAX_COLUMNAS;c++){
             b = document.createElement("div");
             //
             a = document.createAttribute("id");
             a.value = "celda-"+c+"-"+r;
             b.setAttributeNode(a);
             //
             a = document.createAttribute("class");
             if(niveles[nivel][c][r]==PARED){
                a.value = "celda pared";
             }else if(niveles[nivel][c][r]==PIEDRA){
                a.value = "celda piedra";
             }else if(niveles[nivel][c][r]==ARBUSTO){
                a.value = "celda arbusto";
             }else if(niveles[nivel][c][r]==HONGO){
                a.value = "celda hongo";
             }else if(niveles[nivel][c][r]==PERSONAJE){
                a.value = "celda personaje";
             }else{
                a.value = "celda";
             }
             b.setAttributeNode(a);
             //
             this.#contenedor.appendChild(b);   
            }
        }
        sonidos.fondoJuego(); 
    }
      bomba(columna,renglon){
    var id = "celda-"+columna+"-"+renglon;
    document.getElementById(id).classList.remove("personaje");
    document.getElementById(id).classList.add("bomba");
    this.#animacion();
  }
    eliminar(){
        this.#contenedor.remove();
    }
  #animacion(id){
    let cuadro = 1;
    let celda = document.getElementById(id);
    sonidos.bombaInicio();
    const animacion = ()=>{
        celda.classList.remove(`splashScreen-${cuadro}`);
        cuadro++;
        if(cuadro>heroe.explosion){
            this.#detenerExplosion();
        }
        celda.classList.add(`splashScreen-${cuadro}`);
    }
    this.#idAnimacion = setInterval(animacion,heroe.t);
  }
  #detenerExplosion(){
    let celda = document.getElementById(id);
    let pos = id.split("-");
    celda.classList.remove("bomba","bomba-7");
    this.verificarArbustos(parseInt(pos[1]),parseInt(pos[2]));
    //celda.classList.add(`personaje`);
    window.clearInterval(this.#idAnimacion);
    sonidos.bombaFin();
  }
  verificarArbustos(x,y){
    //Verificar abajo
    if(niveles[nivel][x][y+1]==ARBUSTO){
        this.eliminarArbusto(x,y+1);
    }
    //verificar arriba
    if(niveles[nivel][x][y-1]==ARBUSTO){
        this.eliminarArbusto(x,y-1);
    }
    //Verificar izquierda
    if(niveles[nivel][x+1][y]==ARBUSTO){
        this.eliminarArbusto(x+1,y);
    }
    //verificar derecha
    if(niveles[nivel][x-1][y]==ARBUSTO){
        this.eliminarArbusto(x-1,y);
    }
  }

  eliminarArbusto(x,y){
niveles[nivel][x][y]=VACIA;
document.getElementById("celda-"+x+"-"+y).className = "celda";
  }
  validar(direccionValidar,x,y,objeto){
    let celda = null;
    switch(direccionValidar){
        case direccion.ARRIBA:{
            celda = niveles[nivel][x][y-1];
            break;
        }
        case direccion.ABAJO:{
            celda = niveles[nivel][x][y+1];
            break;
        }
        case direccion.IZQUIERDA:{
            celda = niveles[nivel][x-1][y];
            break;
        }
        case direccion.DERECHA:{
            celda = niveles[nivel][x+1][y];
            break;
        }
    }
    return cell === objeto;
  }
  subeNivel(){
    nivel++; let id,celda;

    if(nivel<MAX_NIVELES){
     for(var r=0;r<MAX_RENGLONES;r++){
            for(var c=0;c<MAX_COLUMNAS;c++){
             id = "celda-"+c+"-"+r;
             celda = document.getElementById(id);
             if(niveles[nivel][c][r]==PARED){
                celda.className= "celda pared";
             }else if(niveles[nivel][c][r]==PIEDRA){
                 celda.className = "celda piedra";
             }else if(niveles[nivel][c][r]==ARBUSTO){
                celda.className = "celda arbusto";
             }else if(niveles[nivel][c][r]==HONGO){
                 celda.className = "celda hongo";
             }else if(niveles[nivel][c][r]==PERSONAJE){
                 celda.className = "celda personaje";
             }else{
                 celda.className = "celda";
             } 
            }
        }
    }
        sonidos.cambiaNivel();
        return nivel<MAX_NIVELES;
    }
}