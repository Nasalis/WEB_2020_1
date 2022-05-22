const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('./db/mongo.connection');

const studentRoutes = require("./routes/student/students.routes.mongo");
const professorRoutes = require('./routes/professor/professor.routes.mongo');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/students', studentRoutes)
app.use('/professors', professorRoutes)


module.exports = app;