const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json({ limit: '2mb' }));

app.post('/save', (req, res) => {
  const { filename, content } = req.body;

  if (!filename || !content) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  const filepath = path.join(__dirname, 'f', filename);
  fs.writeFile(filepath, content, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save file' });
    }
    res.json({ message: 'File saved successfully' });
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
