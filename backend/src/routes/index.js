const { Router } = require("express");

const router = Router();

router.use("/test", (req, res, next) => {
  res.send("Server is up!");
});

module.exports = router;
