const express = require("express");
const PORT = 8001;
const urlRoutes = require("./routes/url")
const cookiesParser = require("cookies-parser")
const URL = require('./models/url')
const {connectToMongoDB} = require("./connect")
const userRoutes = require("./routes/user")
const staticRouter = require('./routes/staticRouter')
const {restrictToLoggedUserOnly} = require('./middleware/auth')


const app = express();
app.use(cookieSParser());

connectToMongoDB("mongodb://localhost:27017/short-url").then(()=> console.log("database is connected"));

app.set('view engine', 'ejs');

app.use('url',restrictToLoggedUserOnly,urlRoutes)
app.use(express.json());
app.use('/user',userRoutes)
app.use('/',staticRouter)

// app.get('/:shortId' , async (req,res) => {
//     const shortId = req.params.shortId;

//    const entry = await URL.findOneAndUpdate({
//         shortId
//     },{$push : {
//         visitHistory : {
//             timestamp : Date.now(),
//         }
//     }});
//     res.redirect(entry.redirectURL);
// }
// )

app.listen(PORT , () =>{
    console.log(`Server is connected at port :${PORT}`);
})