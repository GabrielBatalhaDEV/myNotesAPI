const UserModel = require("../Models/usersModel");

async function getUsersService(id) {
  if (!id) {
    throw {
      message: "invalid ID",
      status: 400,
      description: "Token has an invalid ID",
    };
  }

  const user = await UserModel.findOne({ id });

  if (!user) {
    throw {
      message: "invalid ID",
      status: 400,
      description: "Token has an invalid ID",
    };
  }

  return user;
}

module.exports = getUsersService;
