const http = require('http');
const fs = require('fs');

const createServer = http.createServer((req,res) =>{
     const log = `${Date.now()}: ${req.method} ${req.url} : new req Received\n`;

     fs.appendFile("01Server.txt", log, (err,data) =>{
         switch(req.url){
            case '/' : res.end('This is a home page');
            break;
            case '/about' : res.end('this is a about page of the Server');
            break;
            case '/contact' : res.end('this is a contact page of the server');
            break;
            default : res.end('this page could not be found 404');
            break;
         }
     })
})

createServer.listen(6000, () => {
    console.log('server is created')
})