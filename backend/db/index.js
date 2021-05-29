const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "todo_node_app",
    password: null,
    port: 5432
});

module.exports = pool;