import path from "node:path";
import process from "node:process";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Configuration for .env
const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Secret Key
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const authenticateToken = (req, res, next) => {
  // Read the token from cookies
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: "Token required" });
  }

  try {
    const decode = jwt.verify(token, SECRET_KEY);
    req.user = decode;
    console.log(decode);
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
