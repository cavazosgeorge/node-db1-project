// MIDDLEWARE
const Account = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountPayload Middleware");
  next();
};

exports.checkAccountNameUnique = (req, res, next) => {
  console.log("checkAccountNameUnique Middleware");
  next();
};

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id);
    if (!account) {
      next({
        success: false,
        status: 404,
        message: "not found",
      });
      // ACCOUNT EXITS => ATTACH TO REQ-BODY AND CONTINUE ON =>
    } else {
      req.account = account;
      next();
    }
  } catch (err) {
    next(err);
  }
};
