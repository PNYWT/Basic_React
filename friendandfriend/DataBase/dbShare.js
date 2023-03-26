const knex = require("knex");

const db = knex.default({
    client:"mysql2",
    connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : 'Callmeoni1996',
        database : 'express_friend&friend',
        timezone: "+00:00" //ตั้งค่าเวลาสากล
    }
})
// เรียก class นี้กี่ครั้งมันก็จะเชื่อมแค่ครั้งเดียวแล้วแชร์กัน

module.exports = db;