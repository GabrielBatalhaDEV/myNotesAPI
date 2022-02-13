const authenticateUsersService = require("../Services/authenticateUsersService");

async function authenticateUsersController(req, res) {
  const token = await authenticateUsersService(req.body);

  res.json(token);
}

module.exports = authenticateUsersController;
