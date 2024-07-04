const jwt = require("jsonwebtoken");
const secretKey = "secretkey";

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(403).json({ error: "Invalid token" });
      } else {
        req.decoded = decoded;

        // Check if the user is an admin
        if (decoded.role === "admin") {
          next(); // Allow access to the API
        } else {
          res
            .status(403)
            .json({ error: "You are not authorized to access this resource" });
        }
      }
    });
  } else {
    res.status(401).json({ error: "Token is Needed" });
  }
};

module.exports.verifyToken = verifyToken;
