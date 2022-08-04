const md5 = require('md5');
const { users } = require('../database/models');

const getUserByEmail = (email) => users.findOne({ where: { email } });

const createUser = async (name, email, password) => {
  const role = 'customer';
  const hashPassword = md5(password);
  const newUser = await users.create({ name, email, password: hashPassword, role });

  return newUser;
};

const getUsersByRole = async (role) => users.findAll({ where: { role } });

module.exports = {
  getUserByEmail,
  getUsersByRole,
  createUser,
};