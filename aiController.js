const axios = require("axios");

const API_KEY = process.env.GEMINI_API_KEY;

// NOTES
async function generateNotes(req, res) {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text required" });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              { text: "Summarize in simple notes:\n" + text }
            ]
          }
        ]
      }
    );

    res.json(response.data);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Notes generation failed" });
  }
}

// QUIZ
async function generateQuiz(req, res) {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text required" });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              { text: "Create 5 MCQs with answers:\n" + text }
            ]
          }
        ]
      }
    );

    res.json(response.data);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Quiz generation failed" });
  }
}

module.exports = {
  generateNotes,
  generateQuiz
};