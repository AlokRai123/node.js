const path = require("path");
const express = require("express");
const multer = require("multer");


const app = express();
const PORT = 8000;

// const upload = multer({dest : "upload/"});
const storage = multer.diskStorage({
    destination : function (req,file,cb){
        return cb(null, "./uploads");
    },
    filename : function (req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({storage : storage})

app.set("view engine", "ejs");
app.set("viewa", path.resolve("./views"))

app.use(express.urlencoded({extended: false}));

app.get('/', (req,res) => {
    return res.render("Homepage");
});

app.post("/uploads" ,upload.single("uploadImage"), (req,res) =>{

    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
})

app.listen(PORT, () => {
    console.log(`server Started at PORT: 8000`);
})