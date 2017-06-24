var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Setup basic socket server
io.on('connection', (socket) => {
		// Detect connection
    console.log('User Connected...');
    
		// Detect disconnect
    socket.on('disconnect', function(){
        console.log('User Disconnected...');
    });
    
		// Add messages realtime, return as objects
    socket.on('add-message', (message, username) => {
        io.emit('message', {type:'new-message', text: message, username: username});
    });
});

// Listen on port 8000
http.listen(8000, () => {
    console.log('Server Running On Port 8000');
})
