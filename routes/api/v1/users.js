const express = require("express");
const router = express.Router();
const passport = require("passport")
const userController = require("../../../controllers/").userController;
router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/logout", passport.authenticate('jwt', {session: false}), userController.logout);
router.put("/profile", passport.authenticate('jwt', {session: false}), userController.profile);
module.exports = router;