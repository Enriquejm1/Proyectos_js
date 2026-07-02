const express = require('express');
const debug = require('debug')('app:server');
const {Config} = require('./src/config/index');
const {ProductsAPI} = require("./src/products/index")
const {UserAPI}=require('./src/users/index');
const {SalesAPI}=require('./src/sales/index');
const {IndexApi,NotFoundApi} = require('./src/index/index');
const app = express();
app.use(express.json());

//Modulos
IndexApi(app);
ProductsAPI(app);
UserAPI(app);
SalesAPI(app);
NotFoundApi(app);

app.listen(Config.port,()=>{
    debug(`Servidor escuchando 1 ${Config.port}`);
    //console.log(process.env.debug)
    //console.log(`Servidor escuchando 2 ${Config.port}`);
});