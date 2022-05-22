const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const studentRoutes = require('../src/routes/student/studentRoute');
const professorRoutes = require('../src/routes/professor/professorRoute');


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

app.use('/crud/students', studentRoutes)
app.use('/crud/professors', professorRoutes)


module.exports = app;