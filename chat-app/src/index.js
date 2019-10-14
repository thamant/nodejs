const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', socket => {
  console.log('New WebSocket connection');
  // socket.emit('countUpdated', count);
  // socket.on('increment', () => {
  //   count++;
  //   // socket.emit('countUpdated', count);
  //   io.emit('countUpdated', count);
  // });

  socket.emit('message', 'Welcome!');
  socket.on('sendMessage', message => {
    io.emit('message', message);
  });
});

server.listen(port, () => {
  console.log('Server is listening on port ' + port);
});
