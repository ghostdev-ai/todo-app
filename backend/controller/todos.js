const pool = require("../db");

const createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        const todo = await pool.query(
            "insert into todo (description) values($1) returning *",
            [ description ]
        );
        res.status(200).json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await pool.query(
            "select * from todo"
        );
        res.status(200).json(todos.rows);
    } catch (error) {
        console.error(err.message);
    }
};

module.exports = { 
    createTodo, 
    getTodos 
};