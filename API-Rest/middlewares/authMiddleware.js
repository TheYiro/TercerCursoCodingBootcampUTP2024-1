const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.userRole !== 'Admin') {
    return res.status(403).json({ message: 'Require Admin Role' });
  }
  next();
};
