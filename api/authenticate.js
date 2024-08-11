// api/authenticate.js
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const { name, password } = req.body;

  // Foydalanuvchi ma'lumotlarini tekshirish
  if (name === "admin@gmail.com" && password === 1234) {
    const token = jwt.sign({ username }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
