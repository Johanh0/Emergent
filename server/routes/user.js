import express from "express";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "node:path";
import fs from "node:fs";
import { promisePool } from "../database/db.js";
import { generateToken } from "../utils/jwt.js";
import { userAuthenticateToken } from "../middleware/auth.js";
const userRouter = express.Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const uploadDir = path.join(__dirname, "../uploads");

// Upload Configuration
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Initializate multer
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("El archivo debe ser una imagen"), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

userRouter.get("/profile", userAuthenticateToken, async (req, res) => {
  const { id } = req.user;

  try {
    const query = "SELECT * FROM users WHERE id = ?";
    const [user] = await promisePool.execute(query, [id]);

    if (!user.length) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Login successful",
      id: user[0].id,
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      email: user[0].email,
      role: user[0].role,
      profile_image_url: user[0].profile_image_url,
      total_donated: user[0].total_donated,
    });
  } catch (error) {
    console.error("Error trying to login:", error);
    res.status(500).json({ error: "Error login" });
  }
});

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //   Validate if the user data is complete
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Try to insert new usert to the database
    const query =
      "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
    const values = [firstName, lastName, email, hashedPassword];

    const [result] = await promisePool.execute(query, values);

    console.log(`User created: ${result}`);

    // Search in the database the user and login after created the user
    const query2 = "SELECT * FROM users WHERE email = ?";
    const [user] = await promisePool.execute(query2, [email]);

    if (!user.length) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // Generate JWT token
    const token = generateToken(user[0].id);

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
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email,
        profile_image_url: user[0].profile_image_url,
        total_donated: user[0].total_donated,
      });
  } catch (error) {
    console.error("Error trying to create the user:", error);
    res.status(500).json({ error: "Error creating the user" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //   Validate if the user data is complete
  if (!email || !password) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    // Search in the database the user
    const query = "SELECT * FROM users WHERE email = ?";
    const [user] = await promisePool.execute(query, [email]);

    if (!user.length) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = generateToken(user[0].id);

    res
      .cookie("authToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: true,
        maxAge: 30 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login successful",
        first_name: user[0].firstName,
        last_name: user[0].lastName,
        email: user[0].email,
        profile_image_url: user[0].profile_image_url,
        total_donated: user[0].total_donated,
      });
  } catch (error) {
    console.error("Error trying to login:", error);
    res.status(500).json({ error: "Error login" });
  }
});

userRouter.post("/logout", (req, res) => {
  res
    .clearCookie("authToken", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    })
    .status(200)
    .json({ message: "Logout successful" });
});

userRouter.post("/update_user", userAuthenticateToken, async (req, res) => {
  const { firstName, lastName, email, role, id } = req.body;

  //   Validate if the user data is complete
  if (!firstName || !lastName || !email || !role || !id) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    const query =
      "UPDATE users SET firstName = ?, lastName = ?, email = ?, role = ? WHERE id = ?";
    const [user] = await promisePool.execute(query, [
      firstName,
      lastName,
      email,
      role,
      id,
    ]);

    if (user.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch updated user data
    const [updatedUser] = await promisePool.execute(
      "SELECT firstName, lastName, email, role, profile_image_url FROM users WHERE id = ?",
      [id]
    );

    res.status(200).json(updatedUser[0]);
  } catch (error) {
    console.error("Error trying to update the user:", error);
    res.status(500).json({ error: "Error uodating the user" });
  }
});

userRouter.post(
  "/upload",
  userAuthenticateToken,
  upload.single("image"),
  async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "You need to upload an image" });
    }

    const { id } = req.user;

    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }

    try {
      const [currentUser] = await promisePool.execute(
        "SELECT profile_image_url FROM users WHERE id = ?",
        [id]
      );

      const oldImageFilename = currentUser[0]?.profile_image_url;
      const imageFilename = req.file.filename;

      const query = "UPDATE users SET profile_image_url = ? WHERE id = ?";
      const [result] = await promisePool.execute(query, [imageFilename, id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      if (oldImageFilename && oldImageFilename !== "user.jpg") {
        const oldImagePath = path.join(uploadDir, oldImageFilename);

        fs.access(oldImagePath, fs.constants.F_OK, (err) => {
          if (!err) {
            fs.unlink(oldImagePath, (unlinkErr) => {
              if (unlinkErr) {
                console.error("Error deleting old image:", unlinkErr);
              }
            });
          }
        });
      }

      const [updatedUser] = await promisePool.execute(
        "SELECT firstName, lastName, email, role, profile_image_url FROM users WHERE id = ?",
        [id]
      );

      res.status(200).json({
        message: "Image successfully uploaded and user profile updated",
        user: updatedUser[0],
      });
    } catch (error) {
      console.error("Error updating user profile image:", error);
      res.status(500).json({ error: "Error updating profile image" });
    }
  }
);

userRouter.post("/send_message", async (req, res) => {
  const { name, email, subject, message } = req.body;

  //   Validate if the user send all the data
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    const query =
      "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)";

    const values = [name, email, subject, message];

    const [result] = await promisePool.execute(query, values);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error trying to send messagee:", error);
    res.status(500).json({ error: "Error sending message" });
  }
});

userRouter.post("/send_donation", async (req, res) => {
  const { id, firstName, lastName, email, amount } = req.body;
  // const userId = req.user ? req.user.id : null; // Si el usuario está autenticado, usa su ID

  // Validaciones
  if (!firstName || !lastName || !email || !amount) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid donation amount" });
  }

  try {
    // Insertar la donación en la base de datos
    const query = `
      INSERT INTO donations (user_id, firstName, lastName, email, amount)
      VALUES (?, ?, ?, ?, ?)`;
    await promisePool.execute(query, [id, firstName, lastName, email, amount]);

    // Si el usuario está autenticado, actualizar el total donado
    if (id) {
      const updateQuery = `
        UPDATE users
        SET total_donated = total_donated + ?
        WHERE id = ?`;
      await promisePool.execute(updateQuery, [amount, id]);
    }

    res.status(201).json({ message: "Donation successful" });
  } catch (error) {
    console.error("Error processing donation:", error);
    res.status(500).json({ error: "Error processing donation" });
  }
});

userRouter.get("/donations", async (req, res) => {
  try {
    const query = `
  SELECT user_id, firstName, lastName, email, SUM(amount) AS total_donated
  FROM donations
  GROUP BY user_id, firstName, lastName, email

`;
    const [donations] = await promisePool.execute(query);

    res.status(200).json(donations);
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({ error: "Error retrieving donations" });
  }
});

userRouter.get("/donations/total", async (req, res) => {
  try {
    const query = "SELECT SUM(amount) AS total_donations FROM donations";
    const [result] = await promisePool.execute(query);

    res.status(200).json({ total_donations: result[0].total_donations || 0 });
  } catch (error) {
    console.error("Error calculating total donations:", error);
    res.status(500).json({ error: "Error retrieving total donations" });
  }
});

export { userRouter };
