const express = require("express");
const bodyParser = require("body-parser");
const employeeRouter = require('./routes/employees')

const app = express();

app.use(bodyParser.json());
app.use(employeeRouter)

app.listen(6060, function(){
    console.log("Server is started at port 6060");
});