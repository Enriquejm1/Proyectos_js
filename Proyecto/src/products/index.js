const express = require('express');
const {ProductsController}=require('./controller');
const router = express.Router();

module.exports.ProductsAPI = (app)=>{
    router
    .get('/',ProductsController.getProducts)
    .get("/report",ProductsController.generateReport)
    .get('/:id',ProductsController.getProduct)
    .post('/',ProductsController.CreateProducts)
    .put('/:id',ProductsController.UpdateProduct)//Modifica un producto
    .delete('/:id',ProductsController.DeleteProduct)//Elimina un producto
    app.use('/api/products',router)
}