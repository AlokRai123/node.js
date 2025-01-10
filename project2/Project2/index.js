const express = require("express");
const users = require('./MOCK_DATA.json');
const PORT = 7000;
const {connectMongoDb} = require("./routes/user.router")
const {logReqRes} = require('./middleware/user.middleware')


connectMongoDb = "mongodb://127.0.01:27017/youtube-app-1";
app.use(express.urlencoded({extended : false}));


const userRouter = require('./routes/user.router')

const app = express();


app.use(logReqRes("log.txt"));


app.use('user', userRouter)

app.listen(PORT , () =>{
    console.log('server is create')
})
