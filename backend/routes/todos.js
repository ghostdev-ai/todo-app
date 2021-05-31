const express = require("express");
const router = express.Router();

const { 
    createTodo,
    getTodos,
    getTodoById,
    deleteTodo 
} = require("../controller/todos");

router.route('/').post(createTodo).get(getTodos);
router.route('/:id').get(getTodoById).delete(deleteTodo);

module.exports = router;