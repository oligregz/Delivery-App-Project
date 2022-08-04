const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const loginService = require('../services/login');

const segredo = readFileSync('jwt.evaluation.key', 'utf8');

module.exports = async (req, res, next) => {
  const token = req.headers[`${'authorization'}`];
        
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, segredo);
    const userr = await loginService.getUser(decoded.email);
    if (!userr) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }
    // req.user = userr;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};