// keep in mind nodeserver is different than client

const socket = io('http://localhost:8000');

const form = document.getElementById("send-container");

const messageInput = document.getElementById('messageInp');

const messageContainer = document.querySelector(".container");

const user_name = prompt("Enter your name to join iChat : ");

socket.on("connect", () => {
    socket.emit('new-user-joined', user_name);
})