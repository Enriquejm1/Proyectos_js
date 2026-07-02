const express = require('express');
const {Response} = require('../common/response');
const createError = require('http-errors');
module.exports.IndexApi = ()=>{
    const router = express.Router();
    router.get("/",(req,res)=>{
        const menu = {
            productos:`https://${req.header.header.host}/api/products`,
            users:`https://${req.header.header.host}/api/users`,
        };
        Response.success(res,200,"API Inventario",{})
    })
    app.use("/",router);
}

module.exports.NotFoundApi = () =>{
    const router = express.Router();
    router.all("*",(req,res)=>{
        Response.error(res,new createError.NotFound())
    });
    app.use("/",router)
}