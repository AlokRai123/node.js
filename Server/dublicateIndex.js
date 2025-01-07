const http= require('http');

const createServer = http.createServer((req,res) => {
    console.log('New Req recived');
    res.end('hello world');
})

createServer.listen(7000, () =>{
    console.log('server is created');
})