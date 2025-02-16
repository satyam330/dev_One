import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  address: { type: String, required: true }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
  