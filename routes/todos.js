const express = require("express");
const router = express.Router();


// import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updatesTodo} = require("../controllers/updatesTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

// define API routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updatesTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;