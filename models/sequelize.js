const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "Library_Management_System",
  "root",
  "Admin125!@%",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
