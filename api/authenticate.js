// api/authenticate.js
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const { username, password } = req.body;

  // Foydalanuvchi ma'lumotlarini tekshirish
  if (username === "admin@gmail.com" && password === 1234) {
    const token = jwt.sign({ username }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
