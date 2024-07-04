const db = require("../db");

module.exports.get = (req, res) => {
  const data = req.params.key;
  db.query("Select * From  Members where Name =?", data, (error, result) => {
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

module.exports.post = (req, res) => {
  const data = req.body;
  db.query("Insert into Members set ?", data, (error, result) => {
    if (error) {
      res.status(404).json({
        message: "Can not Insert Data",
        status: 404,
        error: error.message,
      });
    } else {
      res.status(200).json({
        message: "Successfully Insert Data",
        status: 200,
        data: result,
      });
    }
  });
};

module.exports.put = (req, res) => {
  const data = [
    req.body.Name,
    req.body.Email,
    req.body.Phone,
    req.body.Address,
  ];

  const id = req.params.id;
  db.query(
    "update Members set Name = ?, Email = ?, Phone = ? , Address =? where  Member_ID =?",
    [...data, id],
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
    "delete from Members where Member_ID=" + req.params.id,
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

function findDuplicates(arr) {
  let duplicates = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      if (!duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    } else {
      seen[arr[i]] = true;
    }
  }

  return duplicates;
}

// Example array
let numbers = [1, 2, 3, 4, 5, 3, 6, 7, 2, 8, 5, 9];

// Call the function to find duplicate numbers
let duplicates = findDuplicates(numbers);
console.log("Duplicate numbers:", duplicates);

for (let index = 2; (index = 0); index++) {
  for (let j = 0; j <= 10; index++) {
    console.log(index + "*" + j + "=" + index * j);
  }
}
