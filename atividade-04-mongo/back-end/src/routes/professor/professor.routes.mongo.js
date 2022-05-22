
const express = require('express');
const router = express.Router();
const professorService = require('../../services/professor.service.mongo');

router.get('/list', function (req, res, next) {
    professorService.list(req, res);
});

router.post('/create', function (req, res, next) {
    professorService.create(req, res);
});

router.put('/update/:id', function (req, res, next) {
    professorService.update(req, res);
});

router.delete('/delete/:id', function (req, res, next) {
    professorService.delete(req, res);
});

router.get('/retrieve/:id', function (req, res, next) {
    professorService.retrieve(req, res);
});

module.exports = router