const UserModel = require("../Models/usersModel");
const bcrypt = require("bcrypt");

async function createUsersService({ name, email, password }) {
  if (!name || !email || !password) {
    throw { message: "Empty field", status: 400, description: "No message" };
  }

  const emailAlreadyExists = await UserModel.findOne({ email });

  if (emailAlreadyExists) {
    throw {
      message: "Email already exists",
      status: 400,
      description: "Email has already been registered in another account",
    };
  }

  const hash = await bcrypt.hash(password, 8);
  const hash_password = hash;

  await UserModel.create({ name, email, password: hash_password });

  const User = await UserModel.findOne({ email });

  return User;
}

module.exports = createUsersService;
