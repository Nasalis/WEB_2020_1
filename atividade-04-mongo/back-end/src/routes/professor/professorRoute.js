const router = require("express").Router();
const ProfessorService = require("../../services/ProfessorService")

router.get('/list', (request, response) => {
    return response.json(ProfessorService.list())
})

router.get('/list/:id', (request, response) => {
    const professor = ProfessorService.retrieve(request.params.id)
    return response.json(professor)
})

router.post("/create", (request, response) => {
    const professor = ProfessorService.create(request.body);
    return response.json(professor);
})

router.put("/update/:id", (request, response) => {
    const professor = ProfessorService.update(request.params.id, request.body)
    return response.json(professor)
})

router.delete("/delete/:id", (request, response) => {
    const hasBeenDeleted = ProfessorService.delete(request.params.id)
    hasBeenDeleted ? response.json({"sucess": true}) : response.json({"sucess": false})
})


module.exports = router