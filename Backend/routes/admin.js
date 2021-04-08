const express = require("express");
const {blockUser,getAllUsers} = require("../controllers/adminControllers");
const auth = require("../middleware/isAuth");
const checkRole = require("../middleware/authRole");
const router = express.Router()

//Block user 
router.put("/:id",auth,checkRole(["admin"]),blockUser)

// Get all users
router.get("/",auth,checkRole(["admin"]),getAllUsers)

module.exports = router