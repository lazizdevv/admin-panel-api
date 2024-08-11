const jwt = require('jsonwebtoken');

// Maxfiy kalit
const JWT_SECRET = 'your-very-secret-key'; // O'z maxfiy kalitni bu yerda kiriting

// Login uchun tekshirish
const authenticateUser = (email, password) => {
  if (email === 'admin@gmail.com' && password === '1234') {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    return { token };
  } else {
    throw new Error('Invalid credentials');
  }
};

// Tokenni tekshirish uchun middleware
const authenticateMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    return res.status(401).json({ message: 'No token provided' });
  }
};

module.exports = {
  authenticateUser,
  authenticateMiddleware
};
