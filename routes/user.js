const express = require('express');
const router = express.Router();

const { getUser, getUsers, addUser, updateUser, deleteUser} = require("../cons/user.js");

router.get("/", getUsers);
router.get("/:id", getUser)
router.post("/", addUser);
router.put("/:id", updateUser) 
router.delete("/:id", deleteUser)

module.exports = router;
