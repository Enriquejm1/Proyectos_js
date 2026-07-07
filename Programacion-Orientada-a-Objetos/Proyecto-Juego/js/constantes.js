const direccion = {
    ARRIBA = "arriba",
    ABAJO = "abajo",
    IZQUIERDA = "izquierda",
    DERECHA:"derecha"
};

const flechas = {
    ArrowUp:"arriba",
    ArrowDown:"abajo",
    ArrowLeft:"izquierda",
    ArrowRight:"derecha"
};
var nivel = 0;
const MAX_NIVELES=2;
const MAX_CUADRO = 2;
const TIEMPO = 250;
const MAX_CUADROS_PERSONAJES = 4;
const MAX_COLUMNAS = 13;
const MAX_RENGLONES = 13;
const PARED =1;
const VACIA = 0;
const PIEDRA = 2;
const ARBUSTO = 3;
const HONGO = 4;
const PERSONAJE = 5;
const heroe = {c:1,r:1,explosion:7,t:200};
const nivel1 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,2,0,0,0,0,3,3,1],
    [1,0,2,2,0,2,0,0,2,0,0,0,1],
    [1,3,0,0,0,3,0,0,0,2,3,0,1],
    [1,0,2,0,0,2,0,0,3,2,0,0,1],
    [1,0,0,2,0,0,0,0,2,0,3,0,1],
    [1,0,0,0,0,2,0,2,0,0,0,0,1],
    [1,0,2,0,0,0,3,0,0,2,3,3,1],
    [1,0,3,2,0,2,0,0,0,0,0,0,1],
    [1,2,0,2,2,0,0,0,2,0,0,0,1],
    [1,0,0,2,0,2,0,0,0,3,2,2,1],
    [1,0,3,3,0,0,2,0,0,0,0,4,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
]

const nivel2 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,2,0,0,0,0,3,3,1],
    [1,0,2,2,0,2,0,0,2,0,0,0,1],
    [1,3,0,0,0,3,0,0,0,2,3,0,1],
    [1,0,2,0,0,2,0,0,3,2,0,0,1],
    [1,0,0,2,0,0,0,0,2,0,3,0,1],
    [1,0,0,0,0,2,0,2,0,0,0,0,1],
    [1,0,2,0,0,0,3,0,0,2,3,3,1],
    [1,0,3,2,0,2,0,0,0,0,0,0,1],
    [1,2,0,2,2,0,0,0,2,0,0,0,1],
    [1,0,0,2,0,2,0,0,0,3,2,2,1],
    [1,0,3,3,0,0,2,0,0,0,0,4,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
];
const nivel = [nivel1,nivel2];