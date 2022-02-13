const { request } = require("express");
const verify = require("jsonwebtoken").verify;
const secret = require("../Config/auth.json").secret;

async function ensureAuth(req, res, next) {
  const reqToken = req.headers.authorization;

  if (!reqToken) {
    throw {
      message: "Invalid Token",
      status: 401,
      description: "The token is invalid, use another token",
    };
  }

  const [, token] = reqToken.split(" ");

  if (!token) {
    throw {
      message: "Invalid Token",
      status: 401,
      description: "The token is invalid, use another token",
    };
  }

  try {
    const { user } = verify(token, secret);

    request.userId = user;

    next();
  } catch (err) {
    throw {
      message: "Invalid Token",
      status: 401,
      description: "The token is invalid, use another token",
    };
  }
}

module.exports = ensureAuth;
