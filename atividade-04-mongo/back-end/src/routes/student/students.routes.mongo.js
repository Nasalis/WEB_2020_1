
const express = require('express');
const router = express.Router();
const studentService = require('../../services/student.service.mongo');

router.get('/list', function (req, res, next) {
    studentService.list(req, res);
});

router.post('/create', function (req, res, next) {
    studentService.create(req, res);
});

router.put('/update/:id', function (req, res, next) {
    studentService.update(req, res);
});

router.delete('/delete/:id', function (req, res, next) {
    studentService.delete(req, res);
});

router.get('/retrieve/:id', function (req, res, next) {
    studentService.retrieve(req, res);
});

module.exports = router