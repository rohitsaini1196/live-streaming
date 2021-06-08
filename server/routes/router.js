var router = require("express").Router();

const userRouter = require("./UserRouter");
const streamRouter = require("./StreamRouter");
const postRouter = require("./PostRouter");
router.use("/user", userRouter);
router.use("/stream", streamRouter);
router.use("/post", postRouter);

router.get("/", (req, res) => {
  res.send("Thanks for using our API");
});

module.exports = router;
