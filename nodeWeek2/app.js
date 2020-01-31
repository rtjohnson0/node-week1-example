const fs = require('fs')

fs.readFile('./planets.txt', {encoding: 'utf-8'},(err,data) =>{
    if (err){
        console.log(err)
    } console.log(data)
}) 
//using the fs package to read the txt file named planets. Turning the bytes read into english and console logging the given information. A conditional that if there is an error to console log the err.