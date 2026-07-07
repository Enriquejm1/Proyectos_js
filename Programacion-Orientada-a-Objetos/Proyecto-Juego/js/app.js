const pantallaInicio = new SplashScreen();
        const sonido = new Sonido();
        const tablero = new Tablero();
        const personaje = Personaje();
        const finJuego = new FinJuego();
        window.onload=function(){
            sonido.crear();
            pantallaInicio.crear();
            document.addEventListener("keydown",borrarSplashScreen,false);
        
        function borrarSplashScreen(e){
                pantallaInicio.eliminar();
                document.removeEventListener("keydown",borrarSplashScreen,false);
                tablero.crear();
                personaje.crear();
                document.addEventListener("keydown",detectarTeclado,false);
            }
        }
        function detectarTeclado(e){
            const tecla = event.key;
            const direccion = flechas[event.key];
            if(tecla==" "){
                //personaje.ocultar();
                tablero.bomba(personaje.x,personaje.y);
            }else if(!direccion){
                return;
            }
            if(tablero.validar(direccion,personaje.x,personaje.y,VACIA)){
            personaje.mover(direccion);
            }else if(tablero.validar(direccion,personaje.x,personaje.y,HONGO)){
                if(tablero.subeNivel()){
                    personaje.iniciar();
                }else{
                    document.removeEventListener("keydown",detectarTeclado,false);
                    personaje.eliminar();
                    tablero.eliminar();
                    finJuego().crear();
                }
            }
        }