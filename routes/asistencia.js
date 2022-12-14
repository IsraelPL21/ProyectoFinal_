const {Router} = require("express")
const { AgregarPersonal, MostrarPersonal, EditarPersonal, EliminarPersonal, Asistencia, EditarAsistencia } = require("../controllers/asistencia")
const {} = require("../controllers/asistencia")
const router = Router()

router.post("/agregarpersonal", AgregarPersonal)

router.get("/mostrarpersonal", MostrarPersonal)

router.put("/editarpersonal", EditarPersonal)
router.put("/editarasistencia", EditarAsistencia)

router.delete("/eliminarpersonal/id/:ID", EliminarPersonal)

router.post("/asistencia", Asistencia)
module.exports = router