const express = require('express');
require('dotenv').config()
const app = express();


app.use(express.json())


let student = {
    name:"reggie",
    age:22,
    school:"NPHS"
}

app.get('/api/test',function(req,res){
   
res.send(student)
})
app.post('/api/test',function(req,res){
    let data = req.body
    res.send(data)
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 })