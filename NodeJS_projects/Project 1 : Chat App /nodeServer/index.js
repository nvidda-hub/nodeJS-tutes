// Node server which will handle socket io connections
const io = require('socket.io')(8000); 
// here we can pick any port 

const users = {};

io.on('connection', (socket) => {
    // when new user joins the chat
    socket.on('new-user-joined', (name)=>{
        console.log("New user joined : ", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);   // let the others know 
    });

    // when user send a message
    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message:message, name:users[socket.id]});
    });

});
// io.on is a instace of socket.io which can listen so many connections
// above io.on means whenever we got connection then run arrow function (socket)=>{}
// socket.on handle an event (e.g. new-user-joined) occured with particular connection
// in socket.on('event_name_as_per_your_convinient', (x)=>{})