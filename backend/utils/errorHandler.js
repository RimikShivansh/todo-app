const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Send a generic error message to the client
  res.status(500).json({
    message: "Internal server error",
    error: err.message,
  });
};

module.exports = errorHandler;
