const pool = require("../db");

const createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        const todo = await pool.query(
            "insert into todos (description) values($1) returning *",
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
            "select * from todos"
        );
        res.status(200).json(todos.rows);
    } catch (error) {
        console.error(err.message);
    }
};

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`select * from todos where id=${id}`);
        res.status(200).json(todo.rows);
    } catch (error) {
        console.error(err.message);
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(`delete from todos where id=${id}`);
        res.status(200).send();
    } catch (error) {
        console.error(err.message);
    }
};

module.exports = { 
    createTodo, 
    getTodos,
    getTodoById,
    deleteTodo 
};