const express = require("express");
const router = express.Router();
const passport = require("passport");
const medicineController = require("../../../controllers/").medicineController;
router.post("/post", passport.authenticate('jwt', {session: false}), medicineController.post);
router.delete("/remove", passport.authenticate('jwt', {session: false}), medicineController.remove);
router.get("/find", passport.authenticate('jwt', {session: false}), medicineController.find);
router.get("/list", passport.authenticate('jwt', {session: false}), medicineController.list);
module.exports = router;