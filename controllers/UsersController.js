const { Router } = require('express');

const { getAllUsersService, createUserService } = require('../services/UsersService');
const { validateUser, validateEmail } = require('../middlewares/UsersMid');

const routerUsers = Router();
const CREATED = 201;
const SUCCESS = 200;

routerUsers.post('/', validateUser, validateEmail, async (req, res) => {
  const { name, email } = req.body;
  const userCreated = await createUserService(name, email);
  return res.status(CREATED).json(userCreated);
});

routerUsers.get('/', async (_req, res) => {
  const getAll = await getAllUsersService();
  return res.status(SUCCESS).json({ users: getAll });
});

module.exports = routerUsers;