const mongoose = require("mongoose");

// Define a reusable schema template
const baseSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true }, // ❌ Removed unique constraint
    Phone_No: { type: String, required: true },
    College: { type: String, required: true },
    Accommodation: { type: String, enum: ["With", "Without"], required: true }, // Uses an enum for valid values
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt fields
);

// Create models using the base schema
const PPTS = mongoose.model("PPTS", baseSchema);
const WebS = mongoose.model("WebS", baseSchema);
const CodingS = mongoose.model("CodingS", baseSchema);
const QuizS = mongoose.model("QuizS", baseSchema);

// Export models
module.exports = {
  PPTS,
  WebS,
  CodingS,
  QuizS,
};
