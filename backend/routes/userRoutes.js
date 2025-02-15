import express from "express";
import { getAllUser, getDetailsById ,registerUser,updateUser, deleteUser } from "../controllers/userController.js";
import { User } from "../models/user.js"; 

const router = express.Router();

// ✅ Get all users
router.get("/users", getAllUser);

// ✅ Get a user by ID
router.get("/user/:id", getDetailsById);

// ✅ Delete a user
router.delete("/user/:id", deleteUser);

router.put("/users/:id",updateUser);

router.post("/register", registerUser);

export default router;
