const express = require('express')
const cors = require('cors');
const app = express()


app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hello bạn đang truy cập vào api /")
})

const server = require("http").Server(app);


const io = require("socket.io")(server, {
    cors: {
        origin: '*',
    }
});


io.on('connection', function (socket) {
    socket.emit('greeting-from-server', {
        greeting: 'Hello Client'
    });
    socket.on('greeting-from-client', function (message) {
        console.log(message);
    });
});


server.listen(5000, () => {
    console.log("HOST is open in local host 5000")
});