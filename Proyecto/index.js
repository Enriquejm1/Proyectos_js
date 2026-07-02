const express = require('express');
const debug = require('debug')('app:server');
const {Config} = require('./src/config/index');
const {ProductsAPI} = require("./src/products/index")
const {UserAPI}=require('./src/users/index');
const app = express();
app.use(express.json());

//Modulos
ProductsAPI(app);
UserAPI(app);
app.listen(Config.port,()=>{
    debug(`Servidor escuchando 1 ${Config.port}`);
    //console.log(process.env.debug)
    //console.log(`Servidor escuchando 2 ${Config.port}`);
});