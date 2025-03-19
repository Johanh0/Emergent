import express from "express";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "node:path";
import process from "node:process";
import { promisePool } from "../database/db.js";
import { generateToken } from "../utils/jwt.js";
import { adminAuthenticateToken } from "../middleware/auth.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const adminRouter = express.Router();

// Configuration to send an email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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
    .clearCookie("authAdminToken", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    })
    .status(200)
    .json({ message: "Logout successful" });
});

adminRouter.get("/search_user", adminAuthenticateToken, async (req, res) => {
  const { searchTerm, searchType } = req.query;

  //   Validate the required data for search
  if (!searchTerm || !searchType) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    let query;
    let queryParams = [];

    // Search in the database the user
    switch (searchType) {
      case "name":
        query =
          "SELECT * FROM users WHERE firstName LIKE CONCAT('%', ?, '%') OR lastName LIKE CONCAT('%', ?, '%') OR CONCAT(firstName, ' ', lastName) LIKE CONCAT('%', ?, '%')";
        queryParams = [searchTerm, searchTerm, searchTerm];
        break;
      case "email":
        query = "SELECT * FROM users WHERE email = ? ";
        queryParams = [searchTerm];
        break;
    }

    const [users] = await promisePool.execute(query, queryParams);

    if (!users.length) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Error trying to search user:", error);
    res.status(500).json({ error: "Error searching the user" });
  }
});

adminRouter.get("/all_users", adminAuthenticateToken, async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const [users] = await promisePool.execute(query);

    if (!users.length) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Error trying to search users:", error);
    res.status(500).json({ error: "Error searching users" });
  }
});

adminRouter.post("/delete_user", adminAuthenticateToken, async (req, res) => {
  const { id, email } = req.body;

  //   Validate if the admin data is complete
  if (!id || !email) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    // Search in the database the admin
    const query = "DELETE FROM users WHERE id = ? AND email = ?";
    const [result] = await promisePool.execute(query, [id, email]);

    const query2 = "SELECT * FROM users";
    const [users] = await promisePool.execute(query2);

    res.status(200).json(users);
  } catch (error) {
    console.error("Error trying to login:", error);
    res.status(500).json({ error: "Error login" });
  }
});

adminRouter.get("/get_messages", adminAuthenticateToken, async (req, res) => {
  try {
    const query = "SELECT * FROM messages";
    const [messages] = await promisePool.execute(query);
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Error retrieving messages" });
  }
});

adminRouter.delete(
  "/delete_message",
  adminAuthenticateToken,
  async (req, res) => {
    const { id } = req.body;

    try {
      const query = "DELETE FROM messages WHERE id = ?";
      const [result] = await promisePool.execute(query, [id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Message not found" });
      }

      res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
      console.error("Error deleting message:", error);
      res.status(500).json({ error: "Error deleting message" });
    }
  }
);

adminRouter.post("/send_email", adminAuthenticateToken, async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: "johanherrera20000@gmail.com",
      to,
      subject,
      text: message,
    });

    res.status(200).json({ success: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export { adminRouter };
