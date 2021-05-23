var router = require("express").Router();
const verifyUserToken = require("../utility/verifyUserToken");

const userService = require("../services/userService");
router.route("/test").get(userService.test);
router.route("/register").post(userService.register);
router.route("/login").post(userService.login);
router.route("/all").get(verifyUserToken, userService.getUsers);
router.route("/u/:username").get(userService.getUserByusername);

module.exports = router;
