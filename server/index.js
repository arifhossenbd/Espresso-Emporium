// Initialize Express app
const express = require('express');
const cors = require('cors');
const app = express();

// Set the port
const port = process.env.PORT || 3000;
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Espresso Emporium server is running..!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});