const debug = require("debug")("app:module-sales-controller");
const createError = require("http-errors");
const { SalesService } = require("./services");
const { Response } = require("../common/response");

module.exports.SalesController = {
  getSales: async (req, res) => {
    try {
      let sales = await SalesService.getAll();
      Response.success(res, 200, "Lista de ventas", sales);
      //res.json(product);
    } catch (error) {
      debug(error);
      Response.error(res);
      //res.status(500).json({message:"Internar server error"});
    }
  },
  getSale: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let sales = await SalesService.getById(id);
      if (!sales) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `venta ID: ${id}`, sales);
      }
      //res.json(products);
    } catch (error) {
      debug(error);
      Response.error(res);
      //res.status(500).json({message:"Internar server error"});
    }
  },
  CreateSales: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedID = await SalesService.create(body);
        Response.success(res, 201, "Venta Agregada", insertedID);
      }
      //res.json(insertedID);
    } catch (error) {
      debug(error);
      Response.error(res);
      //res.status(500).json({message:"Internar server error"});
    }
  },
  DeleteSales: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let sales = await SalesService.deleteP(id);
      Response.success(res, 201, "Venta Eliminada", sales);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  UpdateSales:async(req,res)=>{
    try {
        const {
        params: { id },
      } = req;
      const { body } = req;
     let sales = await SalesService.UpdateProduct(id,body);
     Response.success(res, 201, "Usuario Modificado", sales);
    } catch (error) {
        debug(error);
      Response.error(res);
    }
  },

};
