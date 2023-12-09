// index.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.post('/api/updateJson', async (req, res) => {
  try {
    const { key, value, path: filePath } = req.body;

    if (!key || value === undefined || !filePath) {
      return res.status(400).json({ error: 'Bad Request. Missing key, value, or file path.' });
    }

    const fullPath = path.join(__dirname, filePath);

    // Read existing JSON data from the file
    let jsonData = {};
    try {
      const existingData = await fs.readFile(fullPath, 'utf-8');
      jsonData = JSON.parse(existingData);
    } catch (readError) {
      console.error(readError);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Update the specified key in the JSON data
    if (jsonData.hasOwnProperty(key)) {
      jsonData[key] = value;

      // Write the modified JSON back to the file
      await fs.writeFile(fullPath, JSON.stringify(jsonData, null, 2));

      return res.status(200).json({ message: `Key '${key}' updated successfully` });
    } else {
      return res.status(404).json({ error: `Key '${key}' not found in the JSON data` });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
