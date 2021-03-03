const connection = require('./connection');
// const { ObjectId } = require('mongodb');

const getAll = async () =>
  connection()
    .then((db) => db.collection('recipes').find().toArray());

// const findById = async (id) =>
//   connection().then((db) => db.collection('products').findOne(ObjectId(id)));

// const findByName = async(productName) => 
//   connection().then((db) => db.collection('products').findOne({ name: productName }));

const create = async ({ name, ingredients, preparation, userId }) =>
  connection()
    .then((db) =>
      db.collection('recipes').insertOne({ name, ingredients, preparation, userId }))
    .then((result) => result);

// const update = async (id, newName, newQuantity) =>
//   connection()
//     .then((db) => db.collection('products').findOneAndUpdate(
//       { _id: ObjectId(id) },
//       { $set: {
//         name: newName,
//         quantity: newQuantity,
//       } },
//       { returnOriginal: false },
//     ))
//     .then((result) => result.value);

// const deleteProduct = async (id) => 
//   connection()
//     .then((db) => db.collection('products').findOneAndDelete(
//       { _id: ObjectId(id) },
//     ))
//     .then((result) => result.value);

module.exports = {
  getAll,
//   findById,
//   findByName,
  create,
//   update,
//   deleteProduct,
};