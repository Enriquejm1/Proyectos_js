const express = require('express');
const {SalesController}=require('./controller');
const router = express.Router();

module.exports.SalesAPI = (app)=>{
    router
    .get('/',SalesController.getSales)
    .get('/:id',SalesController.getSale)
    .post('/',SalesController.CreateSales)
    .put('/:id',SalesController.UpdateSales)
    .delete('/:id',SalesController.DeleteSales)
    app.use('/api/sales',router)
}