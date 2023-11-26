const db = require("../config/dbConnection");

exports.profile = (req, res) => {
  try {
    const userId = req.cookies.userId; // Get logged-in user ID
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    db.query(query, (err, profile) => {
      if (err) {
        return res.status(500).json({ error: "Database Error" });
      }
      res.status(200).json(profile);
      // console.log(profile);
      // console.log(userId);
      // console.log(role);
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
    console.log(error);
  }
};
