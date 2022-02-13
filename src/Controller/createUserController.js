const createUsersService = require("../Services/createUsersService");

async function createUserController(req, res) {
  const User = await createUsersService(req.body);

  res.status(201).json(User);
}

module.exports = createUserController;
