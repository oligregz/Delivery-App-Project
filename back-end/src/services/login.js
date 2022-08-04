const { users } = require('../database/models');

const getUser = async (email) => users.findOne({ where: { email } });

module.exports = {
  getUser,
};