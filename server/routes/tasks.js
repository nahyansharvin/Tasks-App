const express = require('express');
const router = express.Router();
const { query } = require('../server');

// Example route to fetch tasks from the database.
router.get('/', async (req, res) => {
  try {
    const results = await query('SELECT * FROM tasks');
    res.json(results);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Other CRUD routes should follow a similar pattern.
