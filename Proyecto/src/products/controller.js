const debug = require('debug')('app:module-products-controller');

const {ProductsService} = require('./services');

module.exports.ProductsController = {
    getProducts:async(req,res)=>{
        try {
            let product = await ProductsService.getAll();
            res.json(product)
        } catch (error) {
            debug(error);
            res.status(500).json({message:"Internar server error"});
        }
    },
    getProduct:(req,res)=>{},
    CreateProducts:(req,res)=>{},
}