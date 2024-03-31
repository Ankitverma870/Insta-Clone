// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let likes = 0;

io.on('connection', (socket) => {
  socket.emit('initialLikes', likes);
  socket.on('like', () => {
    likes++;
    io.emit('updateLikes', likes);
  });
});
app.get('/', (req, res) => {
  res.send('Hello from server');
});


server.listen(3001, () => {
  console.log('Socket.IO server listening on port 3001');
});
