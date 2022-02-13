const usersModel = require("../Models/usersModel");

async function deleteUserService(id) {
  if (!id) {
    throw {
      message: "invalid ID",
      status: 400,
      description: "Token has an invalid ID",
    };
  }

  const user = await usersModel.findOne({ id });

  if (!user) {
    throw {
      message: "invalid ID",
      status: 400,
      description: "Token has an invalid ID",
    };
  }

  const User = await usersModel.deleteOne({ id });

  return User;
}

module.exports = deleteUserService;
