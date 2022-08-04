const md5 = require('md5');
const loginService = require('../services/login');
const { tokenGenerator } = require('../services/token');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send({ message: 'Preencha todos os campos' });

  const user = await loginService.getUser(email);
  console.log(user);
  if (!user) return res.status(404).send({ message: 'Email inválido' });

  if (user.password !== md5(password)) return res.status(400).send({ message: 'Senha inválida' });

  const token = tokenGenerator(user.dataValues);

  return res.status(200).json({ token, user });
};