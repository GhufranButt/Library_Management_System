const express = require("express");
const router = express.Router();
const controller = require("../controllers/publisherController");
// const { verifyToken } = require("../middleware");

// router.use(verifyToken);

router.get("/search/:key", controller.get);

router.post("/", controller.post);

router.put("/:id", controller.put);

router.delete("/:id", controller.delete);

module.exports = router;
