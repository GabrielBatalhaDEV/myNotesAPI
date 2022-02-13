const usersModel = require("../Models/usersModel");

async function updateUsersService({ id, name, email, password }) {
  const user = await usersModel.findOne({ id });
  if (!user) {
    throw {
      message: "invalid ID",
      status: 400,
      description: "User doesnt exists",
    };
  }

  await usersModel.updateOne(
    { id },
    {
      name,
      email,
      password,
    }
  );
}

module.exports = updateUsersService;
