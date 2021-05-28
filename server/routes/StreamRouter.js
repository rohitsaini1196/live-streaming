var router = require("express").Router();
const verifyUserToken = require("../utility/verifyUserToken");

const streamService = require("../services/streamService");
router.route("/test").get(streamService.test);
router.route("/create").post(verifyUserToken, streamService.create);
router
  .route("/s/:username")
  .get(verifyUserToken, streamService.getStreamByUsername);

router.route("/all").get(verifyUserToken, streamService.getStreams);

router
  .route("/d/:username")
  .delete(verifyUserToken, streamService.deleteStream);

module.exports = router;
