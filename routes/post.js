const express = require('express');
const router = express.Router();

const { getPosts, getPost, getCategory, addPost, updatePost, deletePost} = require("../cons/post.js");

router.get("/", getPosts);
router.get("/:pid", getPost)
router.get("/category/:category", getCategory)
router.post("/", addPost);
router.put("/:pid", updatePost) 
router.delete("/:pid", deletePost)

module.exports = router;
