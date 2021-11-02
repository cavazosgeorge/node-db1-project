// MIDDLEWARE
const Account = require("./accounts-model");

// MIDDLEWARE #1
exports.checkAccountPayload = (req, res, next) => {
  const error = { staus: 400 };
  const { name, budget } = req.body;

  // CONDITIONAL LOGIC
  if (name === undefined || budget === undefined) {
    error.message = "name and budget are required";
  } else if (typeof name !== "string") {
    error.message = "name of account must be a string";
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    error.message = "name of account must be between 3 and 100";
  } else if (typeof budget !== "number" || isNaN(budget)) {
    error.message = "budget of account must be a number";
  } else if (budget < 0 || budget > 1000000) {
    error.message = "budget of account is too large or too small";
  }

  if (error.message) {
    next(error);
  } else {
    next();
  }
};

// MIDDLEWARE #2
exports.checkAccountNameUnique = (req, res, next) => {
  console.log("checkAccountNameUnique Middleware");
  next();
};

// MIDDLEWARE #3
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
