function errorHandler(err, req, res, next) {
  const status = !err.status ? 500 : err.status;

  if (status === 500) {
    console.log(err.message);
    console.log(err.stack);
  }

  res.status(status);
  res.json({
    status: err.status,
    error: err.message,
    description: err.description,
  });
}

module.exports = errorHandler;
