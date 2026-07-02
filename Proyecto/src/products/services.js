const {ObjectId} = require("mongodb");

const { Database } = require("../database/index");
const COLLECTION = 'products'
const {ProductUtils} = require('./utils');
const getAll = async()=>{
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
} 

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return collection.findOne({ _id:new ObjectId(id)});//En esta parte de le agrego el new ya que en el curso no era necesario
}

const create = async(product)=>{
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
}

const generateReport = async(name,res)=>{
    let products = await getAll();
    ProductUtils.excelGenerator(products,name,res);
}

module.exports.ProductsService={
    getAll,
    getById,
    create,
    generateReport,
}