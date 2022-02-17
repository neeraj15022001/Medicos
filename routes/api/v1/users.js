const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/").userController;
router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/logout", userController.logout);
router.put("/profile", userController.profile);
module.exports = router;