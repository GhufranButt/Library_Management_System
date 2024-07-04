const db = require("../db");
const express = require("express");
module.exports.get = (req, res) => {
  const data = req.params.key;
  db.query(
    "Select * from Publishers where Publisher_ID=?",
    data,
    (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Error retrieving data",
          status: 404,
          error: error.message,
        });
      } else {
        // res.json({ message: "Successfully Reterive", status: 200 });
        // res.status(200).json(result);
        res.status(200).json({
          message: "Successfully retrieved",
          status: 200,
          data: result,
        });
      }
    }
  );
};

module.exports.post = (req, res) => {
  const data = req.body;
  db.query("select*from Publishers", (error, rows) => {
    db.query(
      "Insert into Publishers set ?",
      data,
      // { ...data, Publisher_ID: rows.length + 122 },
      (error, result) => {
        if (error) {
          res.status(404).json({
            message: "Can not Insert Data",
            status: 404,
            error: error.message,
          });
        } else {
          // res.json({ message: "Successfully Reterive", status: 200 });
          // res.status(200).json(result);
          res.status(200).json({
            message: "Successfully Insert Data",
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
    req.body.Publisher_Name,
    req.body.Location,
    req.body.Established_Year,
  ];

  const id = req.params.id;

  db.query(
    "update Publishers set Publisher_Name =?, Location =?, Established_Year = ? where Publisher_ID =?",
    [...data, id],
    (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Can not Update data",
          status: 404,
          error: error.message,
        });
      } else {
        // res.json({ message: "Successfully Reterive", status: 200 });
        // res.status(200).json(result);
        res.status(200).json({
          message: "Successfully Update Data",
          status: 200,
          data: data,
          result: result,
        });
      }
    }
  );

  db.query();
};

module.exports.delete = (req, res) => {
  db.query(
    "delete from Publishers where Publisher_ID =" + req.params.id,
    (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Cannot Delete data",
          status: 404,
          error: error.message,
        });
      } else {
        // res.json({ message: "Successfully Reterive", status: 200 });
        // res.status(200).json(result);
        res.status(200).json({
          message: "Successfully Deleted",
          status: 200,
          data: result,
        });
      }
    }
  );
};
