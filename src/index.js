const express = require("express");
require("express-async-errors");
const errorHandler = require("./Resources/Error/errorHandler");
const cors = require("cors");
require("dotenv/config");
const router = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`MyNotesAPI listening on port ${process.env.PORT}!`)
);
