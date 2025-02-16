const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Define the allowed origin
const allowedOrigins = ['https://example.com', 'http://localhost:8080'];

// Configure CORS with specific origin
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});