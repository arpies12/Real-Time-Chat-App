// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Listen for incoming connections
io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    // Handle joining a room
    socket.on('joinRoom', ({ username, room }) => {
        socket.join(room);
        socket.broadcast.to(room).emit('message', { user: 'system', text: `${username} has joined the chat` });

        // Send welcome message to the user
        socket.emit('message', { user: 'system', text: `Welcome to the room ${room}, ${username}` });
    });

    // Handle receiving a chat message
    socket.on('chatMessage', ({ room, message, username }) => {
        io.to(room).emit('message', { user: username, text: message });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
