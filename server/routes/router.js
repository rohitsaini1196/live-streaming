var router = require("express").Router();

const userRouter = require("./UserRouter");
const streamRouter = require("./StreamRouter");
router.use("/user", userRouter);
router.use("/stream", streamRouter);

router.get("/", (req, res) => {
  res.send("Thanks for using our API");
});

module.exports = router;
