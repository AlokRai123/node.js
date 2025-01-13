const express = require("express");
const PORT = 8001;
const urlRoutes = require("./routes/url")
const URL = require('./models/url')
const {connectToMongoDB} = require("./connect")

const app = express();

//connectToMongoDB("mongodb://localhost:27017/short-url").then(()=> console.log("database is connected"))

app.use('url',urlRoutes)
app.use(express.json());

app.get('/:shortId' , async (req,res) => {
    const shortId = req.params.shortId;

   const entry = await URL.findOneAndUpdate({
        shortId
    },{$push : {
        visitHistory : {
            timestamp : Date.now(),
        }
    }});
    res.redirect(entry.redirectURL);
}
)

app.listen(PORT , () =>{
    console.log(`Server is connected at port :${PORT}`);
})