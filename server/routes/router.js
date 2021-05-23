var router = require("express").Router();

const userRouter = require("./UserRouter");

router.use("/user", userRouter);

router.get("/", (req, res) => {
  res.send("Thanks for using our API");
});

module.exports = router;
