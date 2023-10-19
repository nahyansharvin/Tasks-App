const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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

// APIS
// get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const results = await query('SELECT * FROM tasks ORDER BY created_at ASC');
    res.json(results);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get task by id
app.get('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const results = await query('SELECT * FROM tasks WHERE id = ?', [id]);
    res.json(results);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// create task
app.post('/tasks', async (req, res) => {
  const sql = 'INSERT INTO tasks (title, description, image, priority) VALUES (?, ?, ?, ?)';
  const values = [
    req.body.title,
    req.body.description,
    req.body.image,
    req.body.priority
  ];
  try {
    await query(sql, values);
    res.json("Task added succesfully!");
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//delete task
app.delete('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await query('DELETE FROM tasks WHERE id = ?', [id]);
    res.json("Task deleted succesfully!");
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//update task
app.put('/tasks/:id', async (req, res) => {
  id = req.params.id;
  const sql = 'UPDATE tasks SET title = ?, description = ?, image = ?, priority = ? WHERE id = ?';
  const values = [
    req.body.title,
    req.body.description,
    req.body.image,
    req.body.priority,
    id
  ];
  try {
    await query(sql, values);
    res.json("Task updated succesfully!");
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(3000, () => {
  console.log("running on port 3000");
});