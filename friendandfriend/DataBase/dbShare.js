const knex = require("knex");

const db = knex.default({
    client:"mysql2",
    connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : 'Callmeoni1996',
        database : 'express_friend&friend'
    }
})

module.exports = db;