import { User } from "../models/user.js"; 
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    try {
        const { name, age, contactNumber, email, city, address, password } = req.body;
        console.log("Received Data:", req.body); // Debugging log


        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving (assuming password is part of form data)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = new User({
            name,
            age,
            contactNumber,
            email,
            city,
            address,
            password: hashedPassword, // Store hashed password
        });

        // Save the new user in the database
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: newUser,
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Get all users
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Get user by ID
export const getDetailsById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Received ID:", id);

        const details = await User.findById(id);
        console.log("Fetched Details:", details);

        if (!details) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(details);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Delete user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        console.log("Deleting user with ID:", id);

        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

 export const updateUser=async(req,res)=>{

    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    
        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.json(updatedUser);
      } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
      }
 }

