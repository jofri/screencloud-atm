
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const PORT = 4000;

// Serve static files (index.html) from from build folder
app.use(express.static(path.join(__dirname, '/client/build')));
// Leverage React routing, return requests to React
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

// Listen for new requests
server.listen(PORT, async (req, res) => { // eslint-disable-line no-unused-vars
  console.log(`Server up and running - listening on port: ${PORT}`);
});