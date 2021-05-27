var router = require("express").Router();
const verifyUserToken = require("../utility/verifyUserToken");

const streamService = require("../services/streamService");
router.route("/test").get(streamService.test);
router.route("/create").post(verifyUserToken, streamService.create);
router
  .route("/s/:username")
  .get(verifyUserToken, streamService.getStreamByUsername);

// router.route("/register").post(userService.register);
// router.route("/login").post(userService.login);
// router.route("/all").get(verifyUserToken, userService.getUsers);
// router.route("/u/:username").get(userService.getUserByusername);
// router.route("/get-stream-key/:username").get(userService.getStreamKey);
// router.route("/post-stream-key/:username").post(userService.generateStreamKey);

module.exports = router;
