const http = require("http");
const express = require("express");
const app = express();
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) =>{
   socket.on("user-message", (message) =>{
   io.emit("message", message);
   });
});

app.get("/" , (req, res) =>{
    return res.end("./public/index.html");
})
server.listen(9000, () => {
    console.log(`Server is runing on port Number : 9000`)
})