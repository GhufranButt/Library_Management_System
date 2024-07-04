const express = require("express");
const app = express();
const db = require("./db");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const { verifyToken } = require("./middleware");

require("./models/sequelize");
app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/books", verifyToken, require("./routes/booksRoutes"));
app.use("/authors", verifyToken, require("./routes/authorRoutes"));
app.use("/members", verifyToken, require("./routes/membersRoutes"));
app.use("/loan", verifyToken, require("./routes/loanRoutes"));
app.use("/publishers", verifyToken, require("./routes/publishersRoutes"));
app.use("/genre", verifyToken, require("./routes/genreRoutes"));
app.use("/register", require("./routes/userRoutes"));
app.use("/login", require("./routes/userRoutes"));
app.use("/user", require("./routes/userDel"));
// app.use("/profile", require("./routes/userRoutes"));
app.use(userRoutes);

app.listen(3000, () => {
  console.log("Running on 3000 port");
});
