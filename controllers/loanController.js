const db = require("../db");

module.exports.get = (req, res) => {
  const loan = req.params.key;
  db.query("Select * from Loan where Loan_ID=?", loan, (error, result) => {
    if (error) {
      res.status(404).json({
        message: "Error retrieving data",
        status: 404,
        error: error.message,
      });
    } else {
      res
        .status(200)
        .json({ message: "Successfully retrieved", status: 200, data: result });
    }
    // if (error) {
    //   res.send("Sorry could not found error", error);
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

  db.query("SELECT * FROM Loan", (error, rows) => {
    if (error) {
      throw error;
    } else {
      const newLoanID = rows.length + 1; // Calculate the new Loan_ID
      const newData = { ...data, Loan_ID: 11 };

      db.query("INSERT INTO Loan SET ?", newData, (error, result) => {
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
        // if (error) {
        //   throw error;
        // } else {
        //   res.send(result);
        // }
      });
    }
  });
};

module.exports.put = (req, res) => {
  const data = [
    req.body.Book_ID,
    req.body.Member_ID,
    req.body.Loan_Date,
    req.body.Due_Date,
    req.body.Return_Date,
  ];
  const id = req.params.id;
  db.query(
    "update Loan set Book_ID = ?, Member_ID = ?, Loan_Date = ? , Due_Date =?, Return_Date =? where  Loan_ID =?",
    [...data, id],
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

module.exports.delete = (req, res) => {
  db.query(
    "delete from Loan where Loan_ID=" + req.params.id,
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
