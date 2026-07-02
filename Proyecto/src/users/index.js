const express = require('express');
const {UserController}=require('./controller');
const router = express.Router();

module.exports.UserAPI = (app)=>{
    router
    .get('/',UserController.getUsers)
    .get('/:id',UserController.getUser)
    .post('/',UserController.CreateUser)
    .put('/:id',UserController.UpdateUser)//Modifica un producto
    .delete('/:id',UserController.DeleteUser)//Elimina un producto
    app.use('/api/users',router)
}