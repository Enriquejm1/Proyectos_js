const {MongoClient} = require('mongodb');
const debug = require('debug')('app:module-database');

const {Config}=require('../config/index');

var conecction = null;
module.exports.Database = (collection) => 
    new Promise(async(resolve,reject)=>{
    try {
        console.log(conecction);
        if(!conecction){
            console.log(Config.mongoUri);
        const client = new MongoClient(Config.mongoUri);
        console.log(client);
        conecction = await client.connect();
        console.log(conecction);
        debug('Nueva conexion realizada con Mongodb atlas');    
    }
    debug('Reutilizando conexión');
        const db = conecction.db(Config.mongoDbname);
        resolve(db.collection(collection));
    } catch (error) {
        reject(error);
    }
});