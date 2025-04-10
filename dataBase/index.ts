import mysql from "mysql";

const localDB = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'moyudemo',
}

const onlineDB = {
    host: 'rm-bp12h7k441z7ym20wqo.mysql.rds.aliyuncs.com',
    user: 'admin_Sc',
    password: 'Zhoujie19840214',
    database: 'demo_db',
}

// 创建数据库连接对象
const db = mysql.createPool(onlineDB);

// 测试连接
db.getConnection((err, connection) => {
    if (err) {
        console.error('数据库连接失败:', err);
    } else {
        connection.release(); // 释放连接
    }
})

export default db;