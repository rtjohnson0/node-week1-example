var express = require('express')
var app = express()
var fs = require('fs')
var data = require('./public/employees.json')

app.get('/',(req,res) =>{
  res.send("Hello World")
})
app.get('/employees', function (req, res) { // the path is /employees. the callback function with the parameters of req and res. 
  
  res.send(data) //  responds with sending the data of all the employees in the json object 
})


app.get('/employees/:id', function (req, res) {  // the path is /employees/:id which allows the user to grab info about the employees by id. the callback function with the parameters of req and res. 
  
  const eData= data.employees.find(function(employee){
    console.log(employee.id)
  return parseInt(req.params.id) === employee.id // creating a constant called "eData" which will have the value of my json object named employees. Using a .find method to find the first match of id inputed and return that value for ids that match

  })
    if(!eData){ // if the constant "eData" doesnt exist it will return with a response status of a 404 error and "Couldnt find employee"
      res.status(404).send(`Couldnt find employee ID`)
    }
  console.log(eData)
  res.send(eData) // sends the eData once the ids have matched
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 })
 