const logger = (req, res, next) => {
  console.log("Middleware ran");
  next();
};

module.exports = logger;
