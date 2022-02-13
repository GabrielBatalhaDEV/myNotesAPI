const mongoose = require("../Database");
const uuid = require("uuid").v4;

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    default: uuid(),
    immutable: true,
  },
  ownerId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  guests: {
    type: Array,
  },
  createdAt: {
    type: Date,
    required: true,
    immutable: true,
    default: Date.now(),
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
