const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
dotenv.config({ path: "./.env" });

const { query } = require('./database/database');
const { uploadImage, deleteImage } = require('./utils/imageUpload');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});


// APIS
// get all tasks
app.get('/tasks', async (req, res, next) => {
  try {
    const results = await query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.json(results);
  } catch (error) {
    next(error);
  }
});

// get task by id
app.get('/tasks/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const results = await query('SELECT * FROM tasks WHERE id = ?', [id]);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(results);
  } catch (error) {
    next(error);
  }
});

// create task
app.post('/tasks', async (req, res, next) => {
  const sql = 'INSERT INTO tasks (title, description, image, image_public_id, priority) VALUES (?, ?, ?, ?, ?)';
  try {
    const { imageUrl, public_id } = await uploadImage(req.body.image);
    const values = [
      req.body.title,
      req.body.description,
      imageUrl,
      public_id,
      req.body.priority
    ];
    await query(sql, values);
    res.status(201).json("Task added successfully!");
  } catch (error) {
    next(error);
  }
});

//delete task
app.delete('/tasks/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const image_id = await query('SELECT image_public_id FROM tasks WHERE id = ?', [id])
    await deleteImage(image_id[0].image_public_id);
    await query('DELETE FROM tasks WHERE id = ?', [id]);
    res.status(204).json("Task deleted succesfully!");
  } catch (error) {
    next(error);
  }
});

//update task
app.put('/tasks/:id', async (req, res, next) => {
  const id = req.params.id;
  const sql = 'UPDATE tasks SET `title` = ?, `description` = ?, `image` = ?, `image_public_id` = ?, `priority` = ? WHERE id = ?';
  
  try {
    const image_id = await query('SELECT image_public_id FROM tasks WHERE id = ?', [id])
    const { imageUrl, public_id } = await uploadImage(req.body.image);
    const values = [
      req.body.title,
      req.body.description,
      imageUrl,
      public_id,
      req.body.priority,
      id
    ];
    await query(sql, values);
    await deleteImage(image_id[0].image_public_id);
    res.status(200).json("Task updated succesfully!");
  } catch (error) {
    next(error);
  }
});


app.listen(3000, () => {
  console.log("running on port 3000");
});