const router = require("express").Router();

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get accounts");
    throw new Error("What da heck happened");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get account by id");
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("post accounts");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("update accounts");
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
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
