const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getUserAll = async () => {
  const users = await connection().then((db) => db.collection('users').find().toArray());
  return users;
};

// Desafio 1 - Cadastrar User
const createUser = async (name, email, password) => {
  const { insertId } = await connection()
    .then((db) => db.collection('users').insertOne({ name, email, password }));
    return {
      user: {
        name,
        email,
        role: 'user',
        _id: ObjectId(insertId),
      },
    };
  };

module.exports = {
  createUser,
  getUserAll,
};