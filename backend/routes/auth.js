const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //  Check if user exists
    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (user.rows.length !== 0) {
      return res.status(400).json("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );

  const token = jwt.sign(
  { user_id: newUser.rows[0].id },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
  );
  res.json({ token });
  
} catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(400).json("User does not exist");
    }

    // Check password
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].password_hash
    );

    if (!validPassword) {
      return res.status(401).json("Incorrect password");
    }

    const token = jwt.sign(
  { user_id: user.rows[0].id },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);
    

res.json({ token });

} catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;