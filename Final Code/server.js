const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'user_statistics',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.get('/api/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const sql = `SELECT * FROM users WHERE user_id = ${userId}`;

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
      throw err;
    }
    if (result.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json(result[0]);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error Handling in API 'throw err;'
// Database Connection: Ensure that your MySQL server is running.
// General Debugging Tips: console.log

