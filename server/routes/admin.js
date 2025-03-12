import express from "express";
import bcrypt from "bcrypt";
import { promisePool } from "../database/db.js";
import { generateToken } from "../utils/jwt.js";
import { adminAuthenticateToken } from "../middleware/auth.js";
const adminRouter = express.Router();

adminRouter.get("/profile", adminAuthenticateToken, (req, res) => {
  res.status(200).json({ message: "Access granted", admin: req.admin });
});

adminRouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  //   Validate if the admin data is complete
  if (!email || !password) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Try to insert new admin to the database
    const query = "INSERT INTO admin ( email, password) VALUES (?, ?)";
    const values = [email, hashedPassword];

    const [result] = await promisePool.execute(query, values);

    console.log(`Admin created: ${result}`);

    // Search in the database the admin and login after created the admin
    const query2 = "SELECT * FROM admin WHERE email = ?";
    const [admin] = await promisePool.execute(query2, [email]);

    if (!admin.length) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, admin[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // Generate JWT token
    const token = generateToken(admin[0].id);

    res
      .cookie("authToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: true,
        maxAge: 30 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Account created successful",
        email: admin[0].email,
        profile_image_url: admin[0].profile_image_url,
      });
  } catch (error) {
    console.error("Error trying to create the admin:", error);
    res.status(500).json({ error: "Error creating the admin" });
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //   Validate if the admin data is complete
  if (!email || !password) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    // Search in the database the admin
    const query = "SELECT * FROM admin WHERE email = ? ";
    const [admin] = await promisePool.execute(query, [email]);

    if (!admin.length) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, admin[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = generateToken(admin[0].id);

    res
      .cookie("authAdminToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: true,
        maxAge: 30 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login successful",
        email: admin[0].email,
        profile_image_url: admin[0].profile_image_url,
      });
  } catch (error) {
    console.error("Error trying to login:", error);
    res.status(500).json({ error: "Error login" });
  }
});

adminRouter.post("/logout", (req, res) => {
  res
    .clearCookie("authToken", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    })
    .status(200)
    .json({ message: "Logout successful" });
});

export { adminRouter };
