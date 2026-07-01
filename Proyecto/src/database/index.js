const {MongoClient} = require('mongodb');
const debug = require('debug')('app:module-database');

const {Config}=require('../config/index');

var conecction = null;
module.exports.Database = (collection) => 
    new Promise(async(resolve,reject)=>{
    try {
        console.log(conecction);
        if(!conecction){
        const clien = new MongoClient(Config.mongoUri);
        let conecction = await clien.connect();
        debug('Nueva conexion realizada con Mongodb atlas');    
    }
    debug('Reutilizando conexión');
        const db = conecction.db(Config.mongoDbname);
        resolve(db.collection(collection));
    } catch (error) {
        reject(error);
    }
});