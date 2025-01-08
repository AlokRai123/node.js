const express = require("express");
const users = require('./MOCK_DATA.json');
const PORT = 7000;

const app = express();
app.use(express.urlencoded({extended : false}));

app.get('/', (req,res) =>{
    return res.end("this is a home page of server")
})

app.get("/api/users" , (req,res) => {
    return res.json(users);
})

app.get("/users", (req,res) =>{
    const html = `
      <ul>
          ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>
    `;
    res.send(html);
})

app.get("/api/users/:id" , (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.post("/api/users",(req,res) =>{
    const body = req.body;
    console.log("body", body);
    return res.json({status : "panding"});
})

app.listen(PORT , () =>{
    console.log('server is create')
})
