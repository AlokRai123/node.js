const http = require('http');
const fs = require('fs');

const createServer = http.createServer((req, res) => {
    const log = `${Date.now()} ${req.url}: new Req Received\n`;
    fs.appendFile("log.txt",log, (err,data) => {
        switch(req.url){
            case '/' : res.end('HomePage');
            break;
            case '/about' : res.end('About Page');
            break;
            case '/contact' : res.end('Contact Page');
            break;
            default : res.end('404');
            break;
         }
    })
   
})


createServer.listen(8000, () => {
    console.log('Server is started')
})