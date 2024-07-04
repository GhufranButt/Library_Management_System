const db = require("../db");
module.exports.get = (req, res) => {
  const Author_Name = req.params.key;
  db.query(
    "SELECT * FROM Authors where Author_Name=?",
    Author_Name,
    (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Error retrieving data",
          status: 404,
          error: error.message,
        });
      } else {
        res.status(200).json({
          message: "Successfully retrieved",
          status: 200,
          data: result,
        });
      }
      // if (error) throw error;
      // else {
      //   res.send(result);
      //   result.forEach((value) => {
      //     console.log(value);
      //   });
      // }
    }
  );
};

module.exports.post = (req, res) => {
  const data = req.body;

  db.query("SELECT * FROM Authors", (error, rows) => {
    db.query(
      "INSERT INTO Authors SET ? ",
      { ...data, Author_ID: rows.length + 12 },
      (error, result) => {
        if (error) {
          res.status(404).json({
            message: "Error retrieving data",
            status: 404,
            error: error.message,
          });
        } else {
          res.status(200).json({
            message: "Successfully retrieved",
            status: 200,
            data: result,
          });
        }
      }
    );
  });
};

module.exports.put = (req, res) => {
  const data = [
    req.body.Author_Name,
    req.body.Birth_Date,
    req.body.Nationality,
  ];

  const id = req.params.id;

  db.query(
    "UPDATE Authors SET Author_Name = ?, Birth_Date = ?, Nationality = ? Where Author_ID =?",
    [...data, id], // Concatenate data array with id
    (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Can not Update data",
          status: 404,
          error: error.message,
        });
      } else {
        res.status(200).json({
          message: "Successfully Updated",
          status: 200,
          data: data,
          result: result,
        });
      }
    }
  );
};

module.exports.delete = (req, res) => {
  db.query(
    "DELETE FROM Authors WHERE Author_ID =" + req.params.id,
    (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Error retrieving data",
          status: 404,
          error: error.message,
        });
      } else {
        res.status(200).json({
          message: "Successfully retrieved",
          status: 200,
          data: result,
        });
      }
    }
  );
};

// module.exports.get = (req, res) => {
//   const { title } = req.query;

//   if (!title) {
//     return res.status(400).json({
//       message: "Title parameter is required",
//       status: 400,
//     });
//   }

//   db.query(
//     "SELECT * FROM Authors WHERE title = ?",
//     [title],
//     (error, result) => {
//       if (error) {
//         res.status(500).json({
//           message: "Error retrieving data",
//           status: 500,
//           error: error.message,
//         });
//       } else {
//         if (result.length === 0) {
//           res.status(404).json({
//             message: "Book not found",
//             status: 404,
//           });
//         } else {
//           res.status(200).json({
//             message: "Successfully retrieved",
//             status: 200,
//             data: result,
//           });
//         }
//       }
//     }
//   );
// };
