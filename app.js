const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

// Routes
const aiRoutes = require("./routes/aiRoutes");
app.use("/", aiRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is LIVE on Render");
});

// IMPORTANT: Render port fix
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});