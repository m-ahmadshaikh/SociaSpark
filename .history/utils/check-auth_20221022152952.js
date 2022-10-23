const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

module.exports = (context) => {
  const headers = context.req.headers.authorization;
  if (headers) {
    const token = headers.split('Bearer: ')[1];
    if (token) {
      const user = jwt.verify(token, SECRET_KEY);
      return user;
    }
  }
};
