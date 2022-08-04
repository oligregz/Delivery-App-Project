const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const secret = readFileSync('jwt.evaluation.key', 'utf8');

const tokenGenerator = (payload) => {
  const { email, password } = payload;
  return jwt.sign(
  { email, password },
  secret,
  { expiresIn: '60m', algorithm: 'HS256' },
);
};

module.exports = { tokenGenerator };