var express = require('express');
var router = express.Router();
router.use("/users", require("./users"))
router.use("/medicines", require("./medicines"))
module.exports = router;
