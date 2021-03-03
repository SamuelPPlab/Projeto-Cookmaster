const jwt = require('jsonwebtoken');
const { emailAlreadyExists } = require('../Models/users');

const mySecretKey = 'Hey-Ho!';

const usersLogin = async (req, res) => {
  const { email } = req.body;

  try {
    const userPayload = await emailAlreadyExists(email);

    const header = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign(userPayload, mySecretKey, header);

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro: Seu token é inválido' });
  }
};

module.exports = usersLogin;