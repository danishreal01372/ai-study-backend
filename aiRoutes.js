const express = require("express");
const router = express.Router();

const {
  generateNotes,
  generateQuiz
} = require("../controllers/aiController");

router.post("/notes", generateNotes);
router.post("/quiz", generateQuiz);

module.exports = router;