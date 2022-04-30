const router = require("express").Router();
const StudentService = require("../../services/StudentService")

router.get('/list', (request, response) => {
    return response.json(StudentService.list())
})

router.get('/list/:id', (request, response) => {
    const student = StudentService.retrieve(request.params.id)
    return response.json(student)
})

router.post("/create", (request, response) => {
    const student = StudentService.create(request.body);
    return response.json(student);
})

router.put("/update/:id", (request, response) => {
    const student = StudentService.update(request.params.id, request.body)
    return response.json(student)
})

router.delete("/delete/:id", (request, response) => {
    const hasBeenDeleted = StudentService.delete(request.params.id)
    hasBeenDeleted ? response.json({"sucess": true}) : response.json({"sucess": false})
})


module.exports = router