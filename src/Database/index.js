const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/myNotes')

module.exports = mongoose