const router = require("express").Router();
const md = require("./accounts-middleware");

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get accounts");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get account by id");
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
      res.json("post accounts");
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  md.checkAccountId,
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
      res.json("update accounts");
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("delete account by id");
  } catch (err) {
    next(err);
  }
});

// GLOBAL ERROR HANDLING MIDDLEWARE
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = router;
