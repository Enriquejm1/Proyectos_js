const { ObjectId } = require("mongodb");

const { Database } = require("../database/index");
const COLLECTION = "products";
const { ProductUtils } = require("./utils");
const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return collection.findOne({ _id: new ObjectId(id) }); //En esta parte de le agrego el new ya que en el curso no era necesario
};

const deleteP = async (id) => {
  const collection = await Database(COLLECTION);
  const query = { _id: new ObjectId(id) };
  const result = await collection.deleteOne(query);
  if (result.deletedCount === 1) {
    console.log("Se elimino correctamente el producto.");
  } else {
    console.log("No se elimino correctamente el producto");
  }
  return result;
};
const UpdateProduct = async(id,product)=>{
  const collection = await Database(COLLECTION);
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updateProduc = {
    $set: product
  };
  console.log(updateProduc);
  let result = await collection.updateOne(filter, updateProduc, options);
  return result;
}
const create = async (product) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(product);
  return result.insertedId;
};

const generateReport = async (name, res) => {
  let products = await getAll();
  ProductUtils.excelGenerator(products, name, res);
};

module.exports.ProductsService = {
  getAll,
  getById,
  create,
  generateReport,
  deleteP,
  UpdateProduct,
};
