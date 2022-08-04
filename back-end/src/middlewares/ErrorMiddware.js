const ErrorMiddleware = (err, _req, res, _next) =>
  res
    .status(500).json({
      name: err.name,
      message: err.message,
    });

module.exports = ErrorMiddleware;