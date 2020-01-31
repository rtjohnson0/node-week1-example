var express = require('express')
var app = express()
var joi = require('joi')
var fs = require('fs')
var data = require('./public/employees.json')
//POST::'/employees'  =  Inserts new employee into your data.
//GET::'/employees' = Returns json with information from all employees.
//GET::'/employees/:id'  =  Returns json with the information from that specific employee.
//PUT::'/employees/:id'  =  Updates information for specified employee.
//DELETE::'/employees/:id'  =  Removes the employee with that ID from the data.

app.use(express.json())



app.get('/employees', function (req, res) { // the path is /employees. the callback function with the parameters of req and res. 
  if(!data){ // if the constant "eData" doesnt exist it will return with a response status of a 404 error and "Couldnt find employee"
  res.status(404).send(`Couldnt find employee ID`)
}
  res.json(data) //  responds with sending the data of all the employees in the json object 
    
    

})
// app.get('/employees/:id', function (req, res) {  // the path is /employees/:id which allows the user to grab info about the employees by id. the callback function with the parameters of req and res. 
  
//   const eData= data.employees.find(function(employee){
//     console.log(employee.id)
//   return parseInt(req.params.id) === employee.id // creating a constant called "eData" which will have the value of my json object named employees. Using a .find method to find the first match of id inputed and return that value for ids that match

//   })
//     if(!eData){ // if the constant "eData" doesnt exist it will return with a response status of a 404 error and "Couldnt find employee"
//       res.status(404).send(`Couldnt find employee ID`)
//     }
//   console.log(eData)
//   res.send(eData) // sends the eData once the ids have matched
// })

// app.post('/employees', (req,res) =>{ // the path is /employees. the callback function with the parameters of req and res. 
//   // console.log(data)
//     const eData = {
//         id: data.employees.length + 1, // grabbing the id by data.employees but increasing the increment by 1 each time
//         name:req.body.name, 
//         salary: req.body.salary,
//         department: req.body.department

        
//     }; // letting the user post their own name, salary, and department inside of the request body to be added into the JSON object
//     if(!eData){ // if eData doesnt exist it will respond with an error status and comment
//       res.status(404).send(`Couldnt find employee ID`)
//     }
    
//     data.employees.push(eData) // pushing the new information given by the user into the eData array.
//     res.send(eData) // responds by sending the eData object
//     console.log(eData)
//     return
    
// })
// app.put('/employees/:id', function (req, res) { // the path is /employees/:id which allows the user to grab info about the employees by id. the callback function with the parameters of req and res. 
  
  
//   const eData= data.employees.find(function(employee){ // creating a constant called "eData" which will have the value of my json object named employees. Using a .find method to find the first match of id inputed and return that value for ids that match
//     console.log(employee.id)
//   return parseInt(req.params.id) === employee.id

//   })
//     if(!eData){
//       res.status(404).send(`Couldnt find employee ID`)
//     } //if eData doesnt exist it will respond with an error status and comment
//     eData.name = req.body.name;
//     eData.salary = req.body.salary;
//     eData.department = req.body.department;
//     // this will update all the information given in the req.body to the placement the user gives for the employee that matches the id
    
//   console.log(eData)
//   res.send(eData) // sends the updated employee information to the client
// })
// app.delete('/employees/:id', function (req, res) { // the path is /employees/:id which allows the user to grab info about the employees by id. the callback function with the parameters of req and res. 
  
//   const eData= data.employees.find(function(employee){ // creating a constant called "eData" which will have the value of my json object named employees. Using a .find method to find the first match of id inputed and return that value for ids that match
//     console.log(employee.id)
//   return parseInt(req.params.id) === employee.id

//   })
//     if(!eData){ //if eData doesnt exist it will respond with an error status and comment
//       res.status(404).send(`Couldnt find employee ID`)
//     }
//    const index = data.employees.indexOf(eData); // creating a constant called index which matches the index of the id of the employee in the JSON Object.
//    data.employees.splice(index,1) // Deletes the employee from the array and only deletes that one.
    
//   console.log(eData)
//   res.send(eData) // sends the data back to the client
// })


const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 })
 