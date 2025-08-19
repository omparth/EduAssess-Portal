const router = require("express").Router();
const ctrl = require("../controllers/assessment.controller");
router.post("/create", ctrl.createAssessment);
router.post("/submit", ctrl.submitAssessment);
router.get("/", ctrl.getAll);
module.exports = router;
