const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/userDelController");

router.delete("/:id", ctrl.delete);

module.exports = router;
