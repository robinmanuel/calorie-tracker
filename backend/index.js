const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const authorize = require("./middleware/authorize");
const recordRoutes = require("./routes/records");


const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/records", recordRoutes);

app.get("/", (req, res) => {
  res.send("API Running ");
});

app.get("/protected", authorize, (req, res) => {
  res.json("You are authorized 🎉");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});