// import express from "express";
const express = require("express");
const User = require("../models/user.js");

const router = express.Router();

// Create a new user
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    console.log("newUser",newUser);
    
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
