/**
 * Promises
 */

const getData = (error) =>{
    return new Promise((resolve,reject)=>{
    if(!error){
        setTimeout(() => {
        resolve({
            nombre:'Juan',
            apellido:'Arguelo',
        })    
        }, 3000);
        
    }else{
        reject('No pudimos obtener los datos');
    }
    })
};

const getData2 = (error) =>{
    return new Promise((resolve,reject)=>{
    if(!error){
        setTimeout(() => {
        resolve({
            nombre:'Juan',
            apellido:'Arguelo',
        })    
        }, 3000);
        
    }else{
        reject('No pudimos obtener los datos');
    }
    })
};
console.log("Inicio");
getData(false)
    .then((result) => {
    console.log(result);
    return getData2(false);
}).then((result) => {
    console.log(result);
})
    .catch((err) => {
    console.log(err);
});

console.log("Final");

getData2(true)
    .then((result) => {
    console.log(result);
})
    .catch((err) => {
    console.log(err);
});


//async - away 
const getData3 = (error) =>{
    return new Promise((resolve,reject)=>{
    if(!error){
        setTimeout(() => {
        resolve({
            nombre:'Juan',
            apellido:'Arguelo',
        })    
        }, 3000);
        
    }else{
        reject('No pudimos obtener los datos');
    }
    })
};

const main = async () => {
   try {
 let resul = await getData3(false);
 let resul2 = await getData2(true);
 console.log(resul);   
 console.log(resul2);
   } catch (error) {
    console.log(error);
   } 
 
}
main();