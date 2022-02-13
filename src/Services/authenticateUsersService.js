const usersModel = require("../Models/usersModel");
const bcrypt = require("bcrypt");
const sign = require("jsonwebtoken").sign;
const secret = require("../Config/auth.json").secret;

async function authenticateUsersService({ email, password }) {
  const user = await usersModel.findOne({ email });

  if (!user) {
    throw {
      status: 403,
      message: "Email/Password Incorrect",
      description: "Your email/password is incorrect or does not exist",
    };
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw {
      status: 403,
      message: "Email/Password Incorrect",
      description: "Your email/password is incorrect or does not exist",
    };
  }

  const token = sign(
    {
      user: user.id,
    },
    secret,
    {
      subject: user.id,
      expiresIn: "1d",
    }
  );

  return token;
}

module.exports = authenticateUsersService;
