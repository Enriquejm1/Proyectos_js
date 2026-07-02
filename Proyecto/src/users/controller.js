const debug = require("debug")("app:module-user-controller");
const createError = require("http-errors");
const { UsersService } = require("./services");
const { Response } = require("../common/response");

module.exports.UserController = {
  getUsers: async (req, res) => {
    try {
      let users = await UsersService.getAll();
      Response.success(res, 200, "Lista de usuarios", users);
      //res.json(product);
    } catch (error) {
      debug(error);
      Response.error(res);
      //res.status(500).json({message:"Internar server error"});
    }
  },
  getUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let users = await UsersService.getById(id);
      if (!users) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `User con ID ${id}`, users);
      }
      //res.json(products);
    } catch (error) {
      debug(error);
      Response.error(res);
      //res.status(500).json({message:"Internar server error"});
    }
  },
  CreateUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedID = await UsersService.create(body);
        Response.success(res, 201, "Usuario Agregado", insertedID);
      }
      //res.json(insertedID);
    } catch (error) {
      debug(error);
      Response.error(res);
      //res.status(500).json({message:"Internar server error"});
    }
  },
  DeleteUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let products = await UsersService.deleteP(id);
      Response.success(res, 201, "Usuario Eliminado", products);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  UpdateUser:async(req,res)=>{
    try {
        const {
        params: { id },
      } = req;
      const { body } = req;
     let products = await UsersService.UpdateProduct(id,body);
     Response.success(res, 201, "Usuario Modificado", products);
    } catch (error) {
        debug(error);
      Response.error(res);
    }
  },

};
