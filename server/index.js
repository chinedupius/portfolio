const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../docs')));

app.post('/contact', express.urlencoded({ extended: true }), (req, res) => {
  console.log('Contact Form Submission:', req.body);
  res.send('Message received. Thank you!');
});

app.get('/download/:filename', (req, res) => {
  const file = path.join(__dirname, 'evidence', req.params.filename);
  res.download(file);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));