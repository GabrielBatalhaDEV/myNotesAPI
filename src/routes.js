const router = require("express").Router();

const createUserController = require("./Controller/createUserController");
const authenticateUsersController = require("./Controller/authenticateUsersController");
const getUsersController = require("./Controller/getUsersController");
const deleteUserController = require("./Controller/deleteUserController");
const updateUsersController = require("./Controller/updateUsersController");

const ensureAuth = require("./Middlewares/ensureAuth");
//gets
router.get("/user", ensureAuth, getUsersController);

//posts
router.post("/user", createUserController);
router.post("/login", authenticateUsersController);

//puts
router.put("/user", ensureAuth, updateUsersController);

//delete
router.delete("/user", ensureAuth, deleteUserController);

module.exports = router;
