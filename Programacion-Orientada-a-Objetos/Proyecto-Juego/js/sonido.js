class Sonido{
    #audio={
        fondo:{
          audioElement:document.createElement("audio"),
          sourseElemet:document.createElement("sourse"),
        },
        bombaInicio:{
          audioElement:document.createElement("audio"),
          sourseElemet:document.createElement("sourse"),
        },
        explosion:{
         audioElement:document.createElement("audio"),
          sourseElemet:document.createElement("sourse"),
        },
        cambioNivel:{
             audioElement:document.createElement("audio"),
          sourseElemet:document.createElement("sourse"),
        }
    };

    crear(){
        //Audio para el fondo del juego
        this.#audio.fondo.sourseElemet.src = "audio-packman/opening_song.mp3";
        this.#audio.fondo.sourseElemet.type = "audio/mpeg";
        this.#audio.fondo.audioElement.setAttribute("autoplay","");
        this.#audio.fondo.audioElement.appendChild(this.#audio.fondo.sourseElemet);
        //Audio para la bomba inicio
        this.#audio.bombaInicio.sourseElemet.src = "audio-packman/bombaInicio.mp3";
        this.#audio.bombaInicio.sourseElemet.type = "audio/mpeg";
        this.#audio.bombaInicio.audioElement.appendChild(this.#audio.bombaInicio.sourseElemet);
        //Audio Explosion
        this.#audio.explosion.sourseElemet.src = "audio-packman/explosion.mp3";
        this.#audio.explosion.sourseElemet.type = "audio/mpeg";
        this.#audio.explosion.audioElement.appendChild(this.#audio.explosion.sourseElemet);
         //cambioNivel
        this.#audio.cambioNivel.sourseElemet.src = "audio-packman/explosion.mp3";
        this.#audio.cambioNivel.sourseElemet.type = "audio/mpeg";
        this.#audio.cambioNivel.audioElement.appendChild(this.#audio.cambioNivel.sourseElemet);
    }
    fondoJuego(){
        this.#audio.fondo.audioElement.play();
    }
    bombaInicio(){
        this.#audio.bombaInicio.audioElement.play();
    }
    bombaFin(){
        this.#audio.explosion.audioElement.play();
    }
    CambiaNivel(){
        this.#audio.cambioNivel.audioElement.play();
    }
}