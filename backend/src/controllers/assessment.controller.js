const db = require("../models");
const Assessment = db.assessment;

exports.createAssessment = async (req, res) => {
  try {
    const { title, description, questions, userId } = req.body;
    const assessment = await Assessment.create({ title, description, questions, userId });
    res.status(201).json({ msg: "Assessment created", assessment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitAssessment = async (req, res) => {
  try {
    const { assessmentId, submittedBy } = req.body;
    const assessment = await Assessment.findByPk(assessmentId);
    if (!assessment) return res.status(404).json({ msg: "Assessment not found" });
    assessment.submittedBy = submittedBy;
    await assessment.save();
    res.json({ msg: "Submitted", assessment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const assessments = await Assessment.findAll();
    res.json(assessments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
