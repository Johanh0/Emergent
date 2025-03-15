import path from "path";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import process from "node:process";

// Configuration for .env
const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Secret Key
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const generateToken = (userId) => {
  const payload = { id: userId };
  const options = { expiresIn: "30m" };

  return jwt.sign(payload, SECRET_KEY, options);
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch {
    throw new Error("Invalid or expired token");
  }
};
