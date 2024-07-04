const db = require("../db");

module.exports.get = (req, res) => {
  const Title = req.params.key;
  if (Title) {
    db.query("select * from Books where Title=?", Title, (error, result) => {
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
          Title: result,
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
  } else {
    db.query("select * from Books", (error, result) => {
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
  }
};

module.exports.post = (req, res) => {
  const data = req.body;
  db.query("Insert into Books set ?", data, (error, result) => {
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
  });
};

module.exports.put = (req, res) => {
  const data = [
    req.body.Title,
    req.body.ISBN,
    req.body.Publisher_ID,
    req.body.Publish_Date,
  ];

  const id = req.params.id;

  db.query(
    "update Books set Title =?, ISBN =? ,Publisher_ID =?,Publish_Date = ? where Book_ID = ?",
    [...data, id],
    (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Can not Update  Data",
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
    "delete from Books where Book_ID =" + req.params.id,
    (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Can not delete Data ",
          status: 404,
          error: error.message,
        });
      } else {
        res.status(200).json({
          message: "Successfully Deleted",
          status: 200,
          data: result,
        });
      }
    }
  );

  // jwt.verify(req.token, secretKey, (error, authData) => {
  //   if (error) {
  //     res.josn({ error: "Invalid token" }); // Forbidden
  //   } else {
  //     req.authData = authData;
  //   }
  // });
};
