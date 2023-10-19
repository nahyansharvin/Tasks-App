const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'task_app'
});

db.connect((err) => {
    if (err) throw new Error(err);
    console.log("Connected to database");
    createTable();
});

function createTable() {
    db.query(`CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image VARCHAR(255),
        image_public_id VARCHAR(255),
        priority ENUM('low', 'medium', 'high') DEFAULT 'low',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`, (err) => {
        if (err) throw new Error(err);
        console.log("Table created/exists");
    }
    );
}

function query(sql, values = []) {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = { query };