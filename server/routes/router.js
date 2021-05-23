var router = require("express").Router();

const userRouter = require("./UserRouter");

router.use("/user", userRouter);

router.get("/", (req, res) => {
  res.send("ROuter.js working fine");
});

module.exports = router;
