var router = require("express").Router();
const verifyUserToken = require("../utility/verifyUserToken");

const postService = require("../services/postService");
router.route("/test").get(postService.test);
router.route("/create").post(verifyUserToken, postService.create);
router.route("/p/:postId").get(verifyUserToken, postService.getPostById);
router.route("/all").get(verifyUserToken, postService.getPosts);
router
  .route("/d/:postId/:userId")
  .delete(verifyUserToken, postService.deletePost);
module.exports = router;
