const debug = require("debug")("app:module-products-controller");
const createError = require("http-errors");
const { ProductsService } = require("./services");
const { Response } = require("../common/response");

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      let product = await ProductsService.getAll();
      Response.success(res, 200, "Lista de productos", product);
      //res.json(product);
    } catch (error) {
      debug(error);
      Response.error(res);
      //res.status(500).json({message:"Internar server error"});
    }
  },
  getProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let products = await ProductsService.getById(id);
      if (!products) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Producto con ID ${id}`, products);
      }
      //res.json(products);
    } catch (error) {
      debug(error);
      Response.error(res);
      //res.status(500).json({message:"Internar server error"});
    }
  },
  CreateProducts: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedID = await ProductsService.create(body);
        Response.success(res, 201, "Producto Agregado", insertedID);
      }
      //res.json(insertedID);
    } catch (error) {
      debug(error);
      Response.error(res);
      //res.status(500).json({message:"Internar server error"});
    }
  },
  DeleteProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let products = await ProductsService.deleteP(id);
      Response.success(res, 201, "Producto Eliminado", products);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  UpdateProduct:async(req,res)=>{
    try {
        const {
        params: { id },
      } = req;
      const { body } = req;
     let products = await ProductsService.UpdateProduct(id,body);
     Response.success(res, 201, "Producto Modificado", products);
    } catch (error) {
        debug(error);
      Response.error(res);
    }
  },
  generateReport: (req, res) => {
    try {
      ProductsService.generateReport("Invetario", res);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
