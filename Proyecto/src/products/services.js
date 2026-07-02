const {ObjectId} = require("mongodb");

const { Database } = require("../database/index");
const COLLECTION = 'products'

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

module.exports.ProductsService={
    getAll,
    getById,
    create
}