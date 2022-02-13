const { request } = require("express");
const updateUsersService = require("../Services/updateUsersService");

async function updateUsersController(req, res) {
  const { userId: id } = request;

  const { name, email, password } = req.body;

  await updateUsersService({ id, name, email, password });

  res.status(204).json("");
}

module.exports = updateUsersController;
