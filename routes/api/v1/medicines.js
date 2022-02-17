const express = require("express");
const router = express.Router();
const medicineController = require("../../../controllers/").medicineController;
router.post("/post", medicineController.post);
router.delete("/remove", medicineController.remove);
router.get("/find", medicineController.find);
module.exports = router;