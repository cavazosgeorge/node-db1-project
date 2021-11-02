// MIDDLEWARE

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountPayload Middleware");
  next();
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountNameUnique Middleware");
  next();
};

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountId Middleware");
  next();
};
