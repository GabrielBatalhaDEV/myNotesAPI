const { request } = require("express");
const getUsersService = require("../Services/getUsersService");

async function getUsersController(req, res) {
  const { userId } = request;
  const user = await getUsersService(userId);

  res.json(user);
}

module.exports = getUsersController;
