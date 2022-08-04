const userService = require('../services/user');
const { tokenGenerator } = require('../services/token');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) res.status(400).send({ message: 'Preencha todos os campos' });

  const user = await userService.getUserByEmail(email);

  if (user) return res.status(409).send({ message: 'Usuário já existe' });

  const newUser = await userService.createUser(name, email, password);

  const token = tokenGenerator(newUser.dataValues);

  return res.status(201).json({ message: 'Created', token, user: newUser });
};

const getUsersByRole = async (req, res) => {
  const { role } = req.params;
  
  const users = await userService.getUsersByRole(role);

  if (!users) return req.status(404).json({ message: 'Este tipo de usuário não existe' });

  return res.json(users);
};

module.exports = {
  register,
  getUsersByRole,
};