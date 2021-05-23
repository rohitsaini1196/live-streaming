var router = require("express").Router();

const userService = require("../services/userService");
router.route("/test").get(userService.test);
router.route("/register").post(userService.register);

module.exports = router;
