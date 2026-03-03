const router = require("express").Router();
const pool = require("../db");
const authorize = require("../middleware/authorize");

// CREATE RECORD
router.post("/", authorize, async (req, res) => {
  try {
    const user_id = req.user;
    const { date, calories, expenditure, steps, weight } = req.body;

    const newRecord = await pool.query(
      `INSERT INTO records (user_id, date, calories, expenditure, steps, weight)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [user_id, date, calories, expenditure, steps, weight]
    );

    res.json(newRecord.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// GET ALL RECORDS FOR LOGGED IN USER
router.get("/", authorize, async (req, res) => {
  try {
    const user_id = req.user;

    const records = await pool.query(
      "SELECT * FROM records WHERE user_id = $1 ORDER BY date DESC",
      [user_id]
    );

    res.json(records.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// DELETE RECORD
router.delete("/:id", authorize, async (req, res) => {
  try {
    const user_id = req.user;
    const { id } = req.params;

    const deleteRecord = await pool.query(
      "DELETE FROM records WHERE id = $1 AND user_id = $2 RETURNING *",
      [id, user_id]
    );

    if (deleteRecord.rows.length === 0) {
      return res.status(404).json("Record not found");
    }

    res.json("Record deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// UPDATE RECORD
router.put("/:id", authorize, async (req, res) => {
  try {
    const user_id = req.user;
    const { id } = req.params;
    const { date, calories, expenditure, steps, weight } = req.body;

    const updateRecord = await pool.query(
      `UPDATE records 
       SET date = $1, calories = $2, expenditure = $3, steps = $4, weight = $5
       WHERE id = $6 AND user_id = $7
       RETURNING *`,
      [date, calories, expenditure, steps, weight, id, user_id]
    );

    if (updateRecord.rows.length === 0) {
      return res.status(404).json("Record not found");
    }

    res.json(updateRecord.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;