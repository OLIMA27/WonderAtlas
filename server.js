const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/wonderatls", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Schema for your form
const registrationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  placeType: String,
  placeName: String,
  visitDate: String
});

const Registration = mongoose.model("Registration", registrationSchema);

// API to save form data
app.post("/api/register", async (req, res) => {
  const newReg = new Registration({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    placeType: req.body.placeType,
    placeName: req.body.placeName,
    visitDate: req.body.visitDate
  });

  await newReg.save();
  res.json({ message: "Registration saved successfully!" });
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
