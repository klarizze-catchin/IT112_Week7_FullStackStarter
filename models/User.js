const mongoose = require("mongoose");
const uri = "mongodb+srv://klerez:IT112Week7_klarizze12@cluster0.jezx0yr.mongodb.net/?appName=Cluster0";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    age: { type: Number, default: null }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);