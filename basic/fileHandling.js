const fs = require('fs');


 // this code is syncronous code
// fs.writeFileSync('hello.txt',"I am a file handler")


// fs.writeFile('./asyncronous.txt', "I am a file handler", (err) =>{})



// this code is syncronous code
const result = fs.readFileSync('./read.txt',"utf-8");
console.log(result);


// this code is asyncronous code
const result1 = fs.readFile('./read.txt',"utf-8",(err,result) =>{
   if(err){
       console.log(err);
   }else{
    console.log(result);
   }
});

console.log(result1);
