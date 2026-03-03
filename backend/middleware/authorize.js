const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const token = req.header("token");

    if (!token) {
      return res.status(403).json("Not authorized");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload.user_id;

    next();
  } catch (err) {
    console.error(err.message);
    res.status(403).json("Invalid token");
  }
};