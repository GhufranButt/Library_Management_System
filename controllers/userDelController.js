const db = require("../db");

exports.delete = (req, res) => {
  const userId = req.params.id;
  db.query("DELETE FROM Users WHERE id = ?", [userId], (error, result) => {
    if (error) {
      res.status(500).json({
        message: "Error deleting user",
        error: error.message,
      });
    } else {
      res.status(200).json({
        message: "User deleted successfully",
        data: result,
      });
    }
  });
};
