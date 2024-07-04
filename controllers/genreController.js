const db = require("../db");

module.exports.get = (req, res) => {
  const genre = req.params.key;
  db.query("Select * from Genre where Genre_ID=?", genre, (error, result) => {
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
    // if (error) {
    //   res.send("Sorry could not found data");
    // } else {
    //   res.send(result);
    //   result.forEach((value) => {
    //     console.log(value);
    //   });
    // }
  });
};

module.exports.post = (req, res) => {
  const data = req.body;
  db.query("Insert into Genre set ?", data, (error, result) => {
    if (error) {
      res.status(404).json({
        message: "Can not Insert Data",
        status: 404,
        error: error.message,
      });
    } else {
      res.status(200).json({
        message: "Successfully Inserted Data",
        status: 200,
        data: result,
      });
    }
  });
};

module.exports.put = (req, res) => {
  const data = [req.body.Genre_Name];
  const id = req.params.id;
  db.query(
    "update Genre set Genre_Name =?  where Genre_ID =?",
    [...data, id],
    (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Can Not Update Data",
          status: 404,
          error: error.message,
        });
      } else {
        res.status(200).json({
          message: "Successfully Updated Data",
          status: 200,
          data: result,
        });
      }
    }
  );
};

module.exports.delete = (req, res) => {
  db.query(
    "delete from Genre where Genre_ID=" + req.params.id,
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
