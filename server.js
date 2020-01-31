const express = require('express');
require('dotenv').config()
const app = express();


app.use(express.json())


let student = [ { 
    id:1,
    name:"reggie",
    age:22,
    school:"NPHS"
},{
    id:2,
    name:"Josh",
    age:20,
    school:"WHS"

}]

app.get('/api/test',function(req,res){
   
res.send(student)
})

app.get('/api/:id', function(req,res){
    const data = student.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })
    res.send(data)
})
app.post('/api/test',function(req,res){
    let data = {
       name: req.body.name,
       age: req.body.age,
       school:req.body.school
    }
    if(!data){
        res.send("Couldnt add employee to list")
    }
    student.push(data)
    res.send(data)
})

app.put('/api/:id', function(req,res){
    const data = student.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })
    if(!data){
        res.send("Couldnt add employee to list")
    }
    data.name = req.body.name
    data.age = req.body.age
    data.school = req.body.school

    res.send(data)
})

app.delete('/api/:id', function(req,res){
    const data = student.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })

    const index = student.indexOf(data)
    student.splice(index,1)

    res.send(data)

})


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 })