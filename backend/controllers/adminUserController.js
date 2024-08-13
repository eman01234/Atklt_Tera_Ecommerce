import AdminUser from "../models/adminUser.js";
import bcrypt from "bcryptjs";

// Create a new admin or manager
export const createAdminUser = async (req, res) => {
  const { role, firstName, lastName, email, password, phoneNumber, address } =
    req.body;

  try {
    // Check if the user already exists
    let userExists = await AdminUser.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdminUser = new AdminUser({
      role,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
    });

    const savedAdminUser = await newAdminUser.save();
    res.status(201).json(savedAdminUser);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: "Error creating admin user" });
  }
};

// Get all admin users
export const getAllAdminUsers = async (req, res) => {
  try {
    const adminUsers = await AdminUser.find().select("-password");
    res.status(200).json(adminUsers);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching admin users" });
  }
};

// Get an admin user by ID
export const getAdminUserById = async (req, res) => {
  try {
    const adminUser = await AdminUser.findById(req.params.id).select(
      "-password"
    );
    if (!adminUser) {
      return res.status(404).json({ message: "Admin user not found" });
    }
    res.status(200).json(adminUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching admin user" });
  }
};

// Update an admin user
export const updateAdminUser = async (req, res) => {
  const { role, firstName, lastName, email, password, phoneNumber, address } =
    req.body;

  try {
    let updatedData = {
      role,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
    };

    // Hash the password if it is being updated
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    const updatedAdminUser = await AdminUser.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedAdminUser) {
      return res.status(404).json({ message: "Admin user not found" });
    }

    res.status(200).json(updatedAdminUser);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: "Error updating admin user" });
  }
};

// Delete an admin user
export const deleteAdminUser = async (req, res) => {
  try {
    const deletedAdminUser = await AdminUser.findByIdAndDelete(req.params.id);
    if (!deletedAdminUser) {
      return res.status(404).json({ message: "Admin user not found" });
    }
    res.status(200).json({ message: "Admin user deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error deleting admin user" });
  }
};
