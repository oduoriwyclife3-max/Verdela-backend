// server.js
import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple storage setup for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Test route
app.get("/", (req, res) => {
  res.send("🌱 Verdela Backend is running successfully!");
});

// Image upload route (simulate AI diagnosis)
app.post("/api/diagnose", upload.single("image"), (req, res) => {
  console.log("Received image:", req.file.filename);
  const fakeDiagnosis = {
    status: "Healthy",
    confidence: "97%",
    advice: "Keep watering regularly and ensure good sunlight exposure.",
  };
  res.json(fakeDiagnosis);
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));


