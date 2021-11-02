const router = require("express").Router();
const md = require("./accounts-middleware");
const Account = require("./accounts-model");

router.get("/", async (req, res, next) => {
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", md.checkAccountId, async (req, res, next) => {
  try {
    const accounts = await Account.getById(req.params.id);
    res.json(accounts);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  async (req, res, next) => {
    try {
      const newAccount = await Account.create(req.body);
      res.status(201).json(newAccount);
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
  async (req, res, next) => {
    const updated = await Account.updateById(req.params.id, req.body);
    res.json(updated);
    try {
      res.json("update accounts");
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", md.checkAccountId, async (req, res, next) => {
  try {
    await Account.deleteById(req.params.id);
    res.json({
      success: true,
      message: "account successfully deleted",
    });
  } catch (err) {
    next(err);
  }
});

// GLOBAL ERROR HANDLING MIDDLEWARE
// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = router;
