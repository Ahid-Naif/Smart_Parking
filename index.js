const express    = require('express');
const app        = require('express')();
const server     = require('http').Server(app);
const router     = require('./routes.js');
const bodyParser = require('body-parser');
const io         = require('socket.io')(server);

const port = 8080;

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', router);
app.set('socketio', io);

server.listen(port);
console.log('App is ready!');

io.on("connection", (socket) =>{
    console.log("Socket.io connection has started!");
});