/**
 * Funciones que pasa a otra funcion mediante parametro
 */

const suma = (a,b,Cb) =>{
    Cb(a+b);
}

suma(1,3,(resul)=>{
    console.log(resul);
})

/**
 * Otro ejemplo
 */

const getData = (cb) =>{
  setTimeout(()=>{
    cb({
    nombre:'Sebastian',
    nombre:'Pedro'
  })
  },3000);
}

const imprimirData = (data) =>{
    console.log(data);
}
getData(imprimirData);







