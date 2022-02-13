const { request } = require("express");
const deleteUserService = require("../Services/deleteUserService");

async function deleteUserController(req, res) {
  const { userId } = request;

  await deleteUserService(userId);

  res.status(204).json("");
}

module.exports = deleteUserController;
